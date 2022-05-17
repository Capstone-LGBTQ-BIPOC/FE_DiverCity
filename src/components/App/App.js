import Categories from '../Categories/Categories';
import Listings from '../Listings/Listings';
import './App.css';
import { LocationContextProvider } from '../../context/LocationContext/LocationContext';
import { BusinessContextProvider } from '../../context/BusinessData/BusinessContext';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <LocationContextProvider>
      <BusinessContextProvider>
        <main>
          <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/:category' element={<Listings />}/>
          </Routes>
        </main>
      </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App;