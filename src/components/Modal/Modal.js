import React, { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';
import { useParams } from 'react-router-dom';

const Modal = () => {
  const { id } = useParams();

  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data.data.attributes))
      .catch(err => setError('Oops, something went wrong! Please try again later.'))
  }, [])

  console.log(business)

  return (
    <div>
      {error && <p>{error}</p>}
      {business && (<>
        <h2>{business.name}</h2>
        <img src={business.image} />
        <h3>Location: {business.location}</h3>
        <h3>Contact: {business.phone}</h3>
        </>)}
    </div>
  )
}

export default Modal;