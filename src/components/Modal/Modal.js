import React, { useState, useEffect } from 'react'
import { fetchBusiness } from '../../apiCalls'
import { useParams, useNavigate } from 'react-router-dom'

const Modal = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  let hoursDisplay
  let time

  const [business, setBusiness] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data.data.attributes))
      .catch(err =>
        setError('Oops, something went wrong! Please try again later.')
      )
  }, [])

  const convertTime = (openOrClose, day) => {
    if (business.hours[day][openOrClose] > 1300) {
      const timeAsNumber = parseInt(business.hours[day][openOrClose]) - 1200
      if (timeAsNumber.toString().length === 3) {
        time =
          timeAsNumber.toString().substring(0, 1) +
          ':' +
          timeAsNumber.toString().substring(1, 3) +
          'pm'
      } else
        time =
          timeAsNumber.toString().substring(0, 2) +
          ':' +
          timeAsNumber.toString().substring(2, 4) +
          'pm'
    } else if (business.hours[day][openOrClose] < 1200) {
      time =
        business.hours[day][openOrClose].substring(1, 2) +
        ':' +
        business.hours[day][openOrClose].substring(2, 4) +
        'am'
    } else if (business.hours[day][openOrClose] === '0000') {
      return 'N/A'
    } else {
      time =
        business.hours[day][openOrClose].substring(0, 2) +
        ':' +
        business.hours[day][openOrClose].substring(2, 4) +
        'pm'
    }
    return time
  }

  if (business) {
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
          <h3>Location: {business.location}</h3>
          <h3>Hours:</h3>
          {hoursDisplay}
          <h3>Contact: {business.phone}</h3>
          <a href={business.url} target='_blank'>
            Visit Website
          </a>
        </>
      )}
    </div>
  )
}

export default Modal
