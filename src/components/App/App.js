import Categories from '../Categories/Categories'
import Listings from '../Listings/Listings'
import Modal from '../Modal/Modal'
import Bookmarks from '../Bookmarks/Bookmarks'
import Nav from '../Nav/Nav'
import './App.css'
import { LocationContextProvider } from '../../contexts/LocationContext'
import { BusinessContextProvider } from '../../contexts/BusinessContext'
import { BookmarkContextProvider } from '../../contexts/BookmarkContext'
import { Routes, Route, NavLink } from 'react-router-dom'
import Form from '../Form/Form'
import Error404 from '../Error404/Error404'

const App = () => {
  return (
    <LocationContextProvider>
      <BusinessContextProvider>
        <BookmarkContextProvider>
          <main>
            <Nav />
            <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <header className='header'>
                <h1>DiverCity: Inclusive Business Guide</h1>
              </header>
            </NavLink>
            <Form />
            <Routes>
              <Route exact path='/' element={<Categories />} />
              <Route path='/food' element={<Listings category='food' />} />
              <Route
                path='/shopping'
                element={<Listings category='shopping' />}
              />
              <Route
                path='/entertainment'
                element={<Listings category='entertainment' />}
              />
              <Route path='/biz/:id' element={<Modal />} />
              <Route exact path='/bookmarks' element={<Bookmarks />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </main>
        </BookmarkContextProvider>
      </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App
