import React, { useState, useEffect } from 'react'
import { fetchBusiness, fetchRecommendations } from '../../apiCalls'
import { useParams, useNavigate } from 'react-router-dom'
import { cleanData, convertFourDigitsToTime, convertThreeDigitsToTime } from '../../utils'

const Modal = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  let hoursDisplay
  let time
  let url

  const [business, setBusiness] = useState('')
  const [recos, setRecos] = useState([])
  const [recosError, setRecosError] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(cleanData(data.data.attributes)))
      .catch(err =>
        setError('Oops, something went wrong! Please try again later.')
      )

    fetchRecommendations(id)
      .then(data => setRecos(data.data))
      .catch(err =>
        setRecosError('Oops, something went wrong! Please try again later.'))
  }, [])

  if (business.url) {
    url = <a href={business.url} target='_blank'>
      Yelp Business Page
    </a>
  } else {
    url = 'No website available'
  }

  const convertTime = (openOrClose, day) => {

    if (business.hours[day][openOrClose] === 2400) {
      const timeAsNumber = parseInt(business.hours[day][openOrClose]) - 1200
      time = convertFourDigitsToTime(timeAsNumber.toString()) + 'am'
    } else if (business.hours[day][openOrClose] === '0000') {
      return 'N/A'
    } else if (business.hours[day][openOrClose] >= 1300) {
      const timeAsNumber = parseInt(business.hours[day][openOrClose]) - 1200

      if (timeAsNumber.toString().length === 3) {
        time = convertThreeDigitsToTime(timeAsNumber) + 'pm'
      } else time = convertFourDigitsToTime(timeAsNumber.toString()) + 'pm'

    } else if (business.hours[day][openOrClose] < 1200) {

      if(business.hours[day][openOrClose][0] === '0') {
        const singleDigitTime = business.hours[day][openOrClose].slice(1)
        time = convertThreeDigitsToTime(singleDigitTime) + 'am'
      } else {
        time = convertFourDigitsToTime(business.hours[day][openOrClose]) + 'am'
      }

    } else {
      time = convertFourDigitsToTime(business.hours[day][openOrClose]) + 'pm'
    }
    return time
  }

  if (business && business.hours) {
    const bizHours = Object.keys(business.hours)
    hoursDisplay = bizHours.map(day => {
      const openTime = convertTime('open', day)
      const closeTime = convertTime('close', day)
      return (
        <div key={day}>
          <p>
            {day}: {openTime} - {closeTime}
          </p>
        </div>
      )
    })
  } else {
    hoursDisplay = 'N/A'
  }

  const recommendations = recos.map(rec => {
    return (
      <div key={recos.length}>
        <p>User: {rec.attributes.user}</p>
        <p>Recommendation: {rec.attributes.recommendation}</p>
      </div>
    )
  })

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {error && <p>{error}</p>}
      {business && (
        <>
          <img src={business.image} />
          <h2>{business.name}</h2>
          <h3>{business.category}</h3>
          <h3>Phone: {business.phone_number}</h3>
          <h3>Website: {url}</h3>
          <h3>Location & Hours</h3>
          <p>Location: {business.location}</p>
          <p>Hours:</p>
          {hoursDisplay}
          <h2>Recommendations</h2>
          {!recos.length ? <p>No user recommendations yet.</p> : recommendations}
        </>
      )}
      {recosError && <p>{recosError}</p>}
    </div>
  )
}

export default Modal