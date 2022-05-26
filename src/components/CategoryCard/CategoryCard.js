import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BusinessContext } from '../../contexts/BusinessContext'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
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
        <h1>{label}</h1>
        <FontAwesomeIcon icon={icon} className='icon fa-1x' />
    </NavLink>
  )
}


export default CategoryCard;

CategoryCard.propTypes = {
  icon: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string
}
