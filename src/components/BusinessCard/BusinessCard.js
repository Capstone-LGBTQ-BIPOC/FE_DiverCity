import React from 'react';
import './BusinessCard.css';
import { Link } from 'react-router-dom';

const BusinessCard = ({ name, image, id }) => {
  return(
    <div>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
      <Link to={`/${id}`}>
        <button>Learn More</button>
      </Link>
    </div>
  )
}

export default BusinessCard;