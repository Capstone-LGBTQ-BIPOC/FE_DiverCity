import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BusinessContext } from '../../contexts/BusinessContext'
import ReactLoading from 'react-loading'
import BusinessCard from '../BusinessCard/BusinessCard'
import './Listings.css'

const Listings = ({ category }) => {
  const biz = useContext(BusinessContext)
  let error = ''

  const [filter, setFilter] = useState('')

  useEffect(() => {
    biz.getBusinesses(category)
  }, [biz.searchLocation])

  let subCategories = []

  biz.businesses.forEach(business =>
    business.attributes.sub_category.forEach(
      subCat => !subCategories.includes(subCat) && subCategories.push(subCat)
    )
  )

  useEffect(() => {
    switch (category) {
      case 'shopping': biz.setCategory('Shopping'); break;
      case 'food': biz.setCategory('Food & Drink'); break;
      case 'entertainment': biz.setCategory('Arts & Entertainment'); break;
    }
  }, [category])

  const options = subCategories.sort().map(subCat => (
    <option key={subCat} value={subCat}>
      {subCat}
    </option>
  ))

  let businessListings = biz.businesses

  if (filter) {
    businessListings = businessListings.filter(listing =>
      listing.attributes.sub_category.includes(filter)
    )
  }

  if (!biz.businesses.length && biz.error) {
    error = <h3>{biz.error}</h3>
  }

  businessListings = businessListings.map(business => {
    return (
      <BusinessCard
        name={business.attributes.name}
        image={business.attributes.image}
        key={business.id}
        id={business.id}
      />
    )
  })


  return(
    <section className='listings'>
      <div className='title-container'>
        <h2>{biz.category}</h2>
        <select className='sub-category-option' value={filter} onChange={e => setFilter(e.target.value)}>
          <option value=''>Show All</option>
          {options}
        </select>
      </div>
      <div className='listings-container'>
      {biz.isLoading && (
        <ReactLoading
          type='spinningBubbles'
          color='#000'
          width={'20%'}
          height={'20%'}
        />
      )}
      {error}
      {businessListings}

      </div>
    </section>
  )
}

export default Listings

Listings.propTypes = {
  category: PropTypes.string
}