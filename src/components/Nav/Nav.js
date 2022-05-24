import { useContext } from 'react'
import './Nav.css'
import { BusinessContext } from '../../contexts/BusinessContext'
import { NavLink } from 'react-router-dom'

function Nav({ icon, type}) {
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
						biz.setCategory('Food & Drink')
					}}>Food & Drink</button>
				</NavLink>
				<NavLink to='/shopping'>
				<button onClick={() => {
					biz.getBusinesses('shopping')
          biz.setCategory('Shopping')
				}}>Shopping</button>
				</NavLink>
				<NavLink to='/entertainment'>
				<button onClick={() => {
					biz.getBusinesses('entertainment')
          biz.setCategory('Arts & Entertainment')
				}}>Arts & Entertainment</button>
				</NavLink>
				<NavLink to='/bookmarks'>
        <button>Want to Visit</button>
				</NavLink>
			</div>
		</nav>
	)
}

export default Nav
