import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessContext } from '../../contexts/BusinessContext';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ icon, type, label }) => {
  const biz = useContext(BusinessContext);
  
  return (
    <section>
      <h1>{label}</h1>
      <FontAwesomeIcon icon={icon} />
      <NavLink to={`/${type}`}>
        <button onClick={() => biz.setCategory(label)}>View All</button>
      </NavLink>
    </section>
  )
}

export default CategoryCard;