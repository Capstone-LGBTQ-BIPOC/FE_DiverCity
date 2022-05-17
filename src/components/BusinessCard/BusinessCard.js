import React from 'react';
import './BusinessCard.css';

function BusinessCard({ name, image }) {
  return(
    <div>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
    </div>
  )
}

export default BusinessCard;