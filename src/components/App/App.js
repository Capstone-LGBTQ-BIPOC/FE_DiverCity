import Categories from '../Categories/Categories'
import Listings from '../Listings/Listings'
import Modal from '../Modal/Modal'
import './App.css'
import { LocationContextProvider } from '../../contexts/LocationContext'
import { BusinessContextProvider } from '../../contexts/BusinessContext'
import { Routes, Route, NavLink } from 'react-router-dom'
import Form from '../Form/Form'

const App = () => {
  return (
    <LocationContextProvider>
      <BusinessContextProvider>
        <main>
          <header>
            <NavLink to='/'>
              <h1>DiverCity: Inclusive Business Guide</h1>
            </NavLink>
          </header>
          <Form />
          <Routes>
            <Route exact path='/' element={<Categories />} />
            <Route path='/:category' element={<Listings />} />
            <Route path='/biz/:id' element={<Modal />} />
          </Routes>
        </main>
      </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App
