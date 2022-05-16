import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BusinessContext } from '../../context/BusinessData/BusinessContext';

function CategoryCard({ icon, type, label }) {
  const biz = useContext(BusinessContext);

  return (
    <section>
      <h1>{label}</h1>
      <FontAwesomeIcon icon={icon} />
      <button onClick={() => biz.getBusinesses(type)}>View All</button>
    </section>
  )
}

export default CategoryCard