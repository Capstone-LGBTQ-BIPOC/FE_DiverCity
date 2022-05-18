import { useState, useEffect } from 'react';
import { fetchBusiness } from '../../apiCalls';

const Modal = ({ id }) => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    fetchBusiness(id)
      .then(data => setBusiness(data))
  }, [])

  return (
    <div>

    </div>
  )
}

export default Modal;