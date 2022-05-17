import { useContext, useState } from 'react';
import { BusinessContext } from '../../context/BusinessData/BusinessContext';
import BusinessCard from '../BusinessCard/BusinessCard';
import './Listings.css';

function Listings() {
  const biz = useContext(BusinessContext);

  const [filter, setFilter] = useState('');

  const businessListings = biz.businesses.map(business => {
   return <BusinessCard name={business.attributes.name} image={business.attributes.image} key={business.id}/>
  });

  return(
    <section>
      <h2>{biz.category}</h2>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value=''>Show All</option>
        {/* {options} */}
      </select>
      {businessListings}
    </section>
  )
}

export default Listings;