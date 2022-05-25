import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessContext } from '../../contexts/BusinessContext';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ icon, type, label }) => {
  const biz = useContext(BusinessContext);
  
  return (
    <section className='category-card'>
      <h1>{label}</h1>
      <FontAwesomeIcon icon={icon} />
      <NavLink to={`/${type}`}>
        <button className='category-button' onClick={() => biz.setCategory(label)}>View All</button>
      </NavLink>
    </section>
  )
}

export default CategoryCard;

CategoryCard.propTypes = {
  icon: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string
}