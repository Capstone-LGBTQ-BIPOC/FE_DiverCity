import * as React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Categories.css';
import { faUtensils, faBagShopping, faMusic } from '@fortawesome/free-solid-svg-icons'

function Categories() {
  return (
    <section>
      <CategoryCard icon={faUtensils} />
      <CategoryCard icon={faBagShopping} />
      <CategoryCard icon={faMusic} />
    </section>
  )
}

export default Categories