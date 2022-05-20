import React from 'react';
import './BusinessCard.css';

const BusinessCard = ({ name, image, id }) => {
  return(
    <div>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
    </div>
  )
}

export default BusinessCard;