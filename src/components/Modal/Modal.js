import React, { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';
import { useParams, useNavigate } from 'react-router-dom';

const Modal = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let hoursDisplay;
  let openTime;
  let closeTime;

  const [business, setBusiness] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data.data.attributes))
      .catch(err => setError('Oops, something went wrong! Please try again later.'))
  }, [])

  if(business) {
    const bizHours = Object.keys(business.hours)
      hoursDisplay = bizHours.map(day => {
      if(business.hours[day].open > 1300) {
        const openPM = parseInt(business.hours[day].open) - 1200
        if(openPM.toString().length === 3) {
          openTime = openPM.toString().substring(0, 1) + ":" + openPM.toString().substring(1, 3) + "pm"
        } else (
         openTime = openPM.toString().substring(0, 2) + ":" + openPM.toString().substring(2, 4) + "pm"
        )
      } else if (business.hours[day].open < 1200) {
        openTime = business.hours[day].open.substring(0, 2) + ":" + business.hours[day].open.substring(2,4) + "am"
      } else if (business.hours[day].open === "0000") {
        return "N/A"
      } else {
        closeTime = business.hours[day].close.substring(0, 2) + ":" + business.hours[day].close.substring(2, 4) + "pm"
      }

      if(business.hours[day].close > 1300) {
       const closePM = parseInt(business.hours[day].close) - 1200
       if(closePM.toString().length === 3) {
         closeTime = closePM.toString().substring(0, 1) + ":" + closePM.toString().substring(1, 3) + "pm"
        } else (
        closeTime = closePM.toString().substring(0, 2) + ":" + closePM.toString().substring(2, 4) + "pm"
        )
      } else if (business.hours[day].close < 1200) {
       closeTime = business.hours[day].close.substring(1, 2) + ":" + business.hours[day].close.substring(2,4) + "am"
        } else if (business.hours[day].close === "0000") {
          return "N/A"
        } else {
          closeTime = business.hours[day].close.substring(0, 2) + ":" + business.hours[day].close.substring(2, 4) + "pm"
        }
        return (
          <div key={day}>
            <p>{day}: {openTime} - {closeTime}</p>
          </div>
        )
    })
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {error && <p>{error}</p>}
      {business && (<>
        <h2>{business.name}</h2>
        <img src={business.image} />
        <h3>{business.category}</h3>
        <h3>Location: {business.location}</h3>
        <h3>Hours:</h3>
        {hoursDisplay}
        <h3>Contact: {business.phone}</h3>
        <a href={business.url} target='_blank'>Visit Website</a>
        </>)}
    </div>
  )
}

export default Modal;