import * as React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.css'
import {
  faUtensils,
  faBagShopping,
  faMusic
} from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
  return (
    <div>
      <h2 className='category-header'>Pick your category</h2>
      <section className='categories-container'>
        <CategoryCard icon={faUtensils} type='food' label='Food & Drink' />
        <CategoryCard icon={faBagShopping} type='shopping' label='Shopping' />
        <CategoryCard
          icon={faMusic}
          type='entertainment'
          label='Arts & Entertainment'
        />
      </section>
    </div>
  )
}

export default Categories
