import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BusinessContext } from '../../contexts/BusinessContext'
import { NavLink } from 'react-router-dom'
import './CategoryCard.css'

const CategoryCard = ({ icon, type, label }) => {
  const biz = useContext(BusinessContext)

  return (
    <NavLink
      to={`/${type}`}
      style={{ textDecoration: 'none', color: 'black' }}
      className='category-card'
      onClick={() => biz.setCategory(label)}
    >
      <section>
        <h1>{label}</h1>
        <FontAwesomeIcon icon={icon} />
      </section>
    </NavLink>
  )
}

export default CategoryCard
