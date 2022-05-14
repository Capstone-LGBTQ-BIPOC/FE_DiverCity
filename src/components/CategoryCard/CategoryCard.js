import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CategoryCard({ icon }) {
  return (
    <section>
      <h1></h1>
      <FontAwesomeIcon icon={icon} />
      <button>View All</button>
    </section>
  )
}

export default CategoryCard