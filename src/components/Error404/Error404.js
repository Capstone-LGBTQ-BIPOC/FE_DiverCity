import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div>
      <p>Page not found. Please return to <Link to='/'>home</Link>.</p>
    </div>
  )
}

export default Error404;