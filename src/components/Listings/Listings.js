import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessContext } from '../../context/BusinessData/BusinessContext';
import BusinessCard from '../BusinessCard/BusinessCard';
import './Listings.css';

function Listings() {
  const { category } = useParams();

  const biz = useContext(BusinessContext);

  const businessListings = biz.businesses.map(business => {
   return <BusinessCard name={business.attributes.name} image={business.attributes.image} key={business.id}/>
  });

  return(
    <section>
      <header>
        <h2>{biz.category}</h2>
      </header>
      {businessListings}
    </section>
  )
}

export default Listings;