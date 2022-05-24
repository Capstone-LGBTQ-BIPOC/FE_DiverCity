import React, { useState, useEffect } from 'react'
import { fetchBusiness, fetchRecommendations } from '../../apiCalls'
import { useParams, useNavigate } from 'react-router-dom'

const Modal = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  let hoursDisplay
  let time
  let recommendations
  let location
  let contact
  let url

  const [business, setBusiness] = useState('')
  const [recos, setRecos] = useState([])
  const [recosError, setRecosError] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data.data.attributes))
      .catch(err =>
        setError('Oops, something went wrong! Please try again later.')
      )

    fetchRecommendations(id)
      .then(data => setRecos(data.data))
      .catch(err =>
        setRecosError('Oops, something went wrong! Please try again later.'))
  }, [])

  if(business.location) {
    location = business.location
  } else {
    location = 'N/A'
  }

  if(business.phone_number) {
    contact = business.phone_number
  } else {
    contact = 'N/A'
  }

  if(business.url) {
    url = <a href={business.url} target='_blank'>
      Visit Website
    </a>
  } else {
    url = 'No website available'
  }

  const convertFourDigitsToTime = inputTime => {
    return inputTime.substring(0, 2) + ':' + inputTime.substring(2, 4)
  }

  const convertThreeDigitsToTime = inputTime => {
    return inputTime.toString().substring(0, 1) +
    ':' +
    inputTime.toString().substring(1, 3)
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

  if (recos) {
    if (!recos.length) {
      recommendations = <p>No user recommendations yet.</p>
    } else {
      recommendations = recos.map(rec => {
        return (
          <div key={recos.length}>
            <p>User: {rec.attributes.user}</p>
            <p>Recommendation: {rec.attributes.recommendation}</p>
          </div>
        )
      })
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {error && <p>{error}</p>}
      {business && (
        <>
          <h2>{business.name}</h2>
          <img src={business.image} />
          <h3>{business.category}</h3>
          <h3>Location: {location}</h3>
          <h3>Hours:</h3>
          {hoursDisplay}
          <h3>Contact: {contact}</h3>
          {url}
          <h2>Recommendations</h2>
          {recommendations}
        </>
      )}
      {recosError && <p>{recosError}</p>}
    </div>
  )
}

export default Modal
