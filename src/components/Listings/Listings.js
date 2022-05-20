import { useContext, useState, useEffect } from 'react';
import { BusinessContext } from '../../context/BusinessData/BusinessContext';
import ReactLoading  from 'react-loading';
import BusinessCard from '../BusinessCard/BusinessCard';
import { useParams } from 'react-router-dom';
import './Listings.css';

const Listings = () => {
  let { category } = useParams();

  const biz = useContext(BusinessContext);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    biz.getBusinesses(category)
    biz.setCategory(category)
  }, [])

  useEffect(() => {
    return () => {
      biz.setBusinesses([])
    }
  }, [])

  let subCategories = [];
  
  biz.businesses.forEach(business => business.attributes.sub_category.forEach(subCat => !subCategories.includes(subCat) && subCategories.push(subCat)));

  const options = subCategories.sort().map(subCat => <option key={subCat} value={subCat}>{subCat}</option>);

  let businessListings = biz.businesses;

  if (filter) {
    businessListings = businessListings.filter(listing => listing.attributes.sub_category.includes(filter));
  }

  businessListings = businessListings.map(business => {
    return <BusinessCard name={business.attributes.name} image={business.attributes.image} key={business.id} />
  });

  return(
    <section>
      <h2>{biz.category}</h2>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value=''>Show All</option>
        {options}
      </select>
      {biz.isLoading && <ReactLoading type='spinningBubbles' color='#000' width={'20%'} height={'20%'} />}
      {businessListings}
    </section>
  )
}

export default Listings;