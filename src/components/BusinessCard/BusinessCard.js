import React from 'react';
import './BusinessCard.css';
import { Link } from 'react-router-dom';

const BusinessCard = ({ name, image, id }) => {
  return(
    <div className='business-card'>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
      <Link to={`/biz/${id}`}>
        <button>Learn More</button>
      </Link>
    </div>
  )
}

export default BusinessCard;