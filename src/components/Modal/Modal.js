import { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';

const Modal = ({ id }) => {
  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data))
      .catch(err => setError('Oops, something went wrong! Please try again later.'))
  }, [])

  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Modal;