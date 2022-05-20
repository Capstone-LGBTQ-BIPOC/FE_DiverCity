import { useContext } from 'react'
import './Nav.css'
import { BusinessContext } from '../../context/BusinessData/BusinessContext';
import { NavLink } from 'react-router-dom'

// const Nav = () => {

function Nav({ icon, type, label}) {
	const biz = useContext(BusinessContext);


	return (
		<nav className='navigation'>
			<div className='nav-buttons'>
				<NavLink to='/'>
					<button>Home</button>
				</NavLink>
				<NavLink to='/food'>
					<button onClick={() => {
						biz.getBusinesses('food')
						// biz.setCategory(label)
					}}>Food & Drink</button>
				</NavLink>
				<NavLink to='/shopping'>
				<button onClick={() => {
					biz.getBusinesses('shopping')
				}}>Shopping</button>
				</NavLink>
				<NavLink to='/entertainment'>
				<button onClick={() => {
					biz.getBusinesses('entertainment')
				}}>Entertainment & Arts</button>
				</NavLink>
			</div>
		</nav>
	)
}

export default Nav
