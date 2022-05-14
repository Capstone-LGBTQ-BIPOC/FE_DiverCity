import * as React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa-utensils, fa-bag-shopping } from '@fortawesome/fontawesome-free-solid'

function Categories() {
  return (
    <section>
      <CategoryCard icon={<FontAwesomeIcon icon='fa-solid fa-utensils' />} />
      <CategoryCard icon={<FontAwesomeIcon icon="fa-solid fa-bag-shopping" />} />
      <CategoryCard />
    </section>
  )
}

export default Categories