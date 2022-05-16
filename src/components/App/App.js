import * as React from 'react';
import Categories from '../Categories/Categories';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationContextProvider } from '../../context/LocationContext/LocationContext';
import BusinessContextProvider from '../../context/BusinessData/BusinessContext';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <LocationContextProvider>
      <BusinessContextProvider>
        <main>
          <Routes>
            <Route path='/' element={<Categories />} />
          </Routes>
        </main>
      </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App;
