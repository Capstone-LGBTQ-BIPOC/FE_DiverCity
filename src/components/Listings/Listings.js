import { useContext } from 'react';
import { BusinessContext } from '../../context/BusinessData/BusinessContext';
import BusinessCard from '../BusinessCard/BusinessCard';

import './Listings.css';

function Listings() {
  const biz = useContext(BusinessContext);
  const businessListings = biz.map(biz => {
   return <BusinessCard name={biz.attributes.name} image={biz.attributes.image} />
  });
  
  return(
    <section>{businessListings}</section>
  )
}

export default Listings;