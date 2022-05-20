import { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';
import { useParams } from 'react-router-dom';

const Modal = () => {
  const { id } = useParams();

  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data))
      .catch(err => setError('Oops, something went wrong! Please try again later.'))
  }, [])

  console.log(business)

  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Modal;