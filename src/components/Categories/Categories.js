import * as React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Categories.css';
import { faUtensils, faBagShopping, faMusic } from '@fortawesome/free-solid-svg-icons'

function Categories() {
  return (
    <section>
      <CategoryCard icon={faUtensils} type='food' label='Food & Drink' />
      <CategoryCard icon={faBagShopping} type='shopping' label='Shopping' />
      <CategoryCard icon={faMusic} type='entertainment' label='Arts & Entertainment' />
    </section>
  )
}

export default Categories