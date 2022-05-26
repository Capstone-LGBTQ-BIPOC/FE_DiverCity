import React, { useState, useEffect } from 'react'
import { fetchBusiness, fetchRecommendations } from '../../apiCalls'
import { useParams, useNavigate } from 'react-router-dom'
import { cleanData, convertTime } from '../../utils'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css'

const Modal = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  let hoursDisplay = 'N/A'

  const [business, setBusiness] = useState('')
  const [recos, setRecos] = useState([])
  const [recosError, setRecosError] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(cleanData(data.data.attributes)))
      .catch(err => setError('Oops, something went wrong! Please try again later.'))

    fetchRecommendations(id)
      .then(data => setRecos(data.data))
      .catch(err => setRecosError('Oops, something went wrong! Please try again later.'))
  }, [])

  let url = business.url ? <a href={business.url} target='_blank'>Yelp Business Page</a> : 'No website available'

  if (business && business.hours) {
    const bizHours = Object.keys(business.hours)
    hoursDisplay = bizHours.map(day => {
      const openTime = convertTime('open', day, business)
      const closeTime = convertTime('close', day, business)
      return (
        <div key={day}>
          <p>
            {day}: {openTime} - {closeTime}
          </p>
        </div>
      )
    })
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
      <button onClick={() => navigate(-1)} className='back-btn'>Go Back</button>
      {error && <p>{error}</p>}
      {business && (
        <div className='biz-container'>
          <div className='biz-details'>
            <h2>{business.name}</h2>
            <h3 className='category'>{business.category}</h3>
            <h3><FontAwesomeIcon icon={faPhone} /> {business.phone_number}</h3>
            <h3>{url}</h3>
            <h3>Location & Hours</h3>
            <p>{business.location}</p>
            {hoursDisplay}
            <h2>Recommendations</h2>
            {!recos.length ? <p>No user recommendations yet.</p> : recommendations}
          </div>
          <img src={business.image} />
        </div>
      )}
      {recosError && <p>{recosError}</p>}
    </div>
  )
}

export default Modal