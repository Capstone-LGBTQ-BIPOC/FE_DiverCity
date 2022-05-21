import React, { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';
import { useParams, useNavigate } from 'react-router-dom';

const Modal = () => {
  const { id } = useParams();
  let navigate = useNavigate();

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
      <button onClick={() => navigate(-1)}>Go Back</button>
      {error && <p>{error}</p>}
      {business && (<>
        <h2>{business.name}</h2>
        <img src={business.image} />
        <h3>{business.category}</h3>
        <h3>Location: {business.location}</h3>
        <h3>Contact: {business.phone}</h3>
        <a href={business.url} target='_blank'>Visit Website</a>
        </>)}
    </div>
  )
}

export default Modal;