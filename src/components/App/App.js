import Categories from '../Categories/Categories'
import Listings from '../Listings/Listings'
import Modal from '../Modal/Modal'
import Bookmarks from '../Bookmarks/Bookmarks'
import './App.css'
import { LocationContextProvider } from '../../contexts/LocationContext'
import { BusinessContextProvider } from '../../contexts/BusinessContext'
import { BookmarkContextProvider } from '../../contexts/BookmarkContext'
import { Routes, Route, NavLink } from 'react-router-dom'
import Form from '../Form/Form'

const App = () => {
  return (
    <LocationContextProvider>
      <BusinessContextProvider>

      <BookmarkContextProvider>
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
            <Route exact path='/bookmarks' element={<Bookmarks />}/>
          </Routes>
        </main>
      </BookmarkContextProvider>

      </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App
