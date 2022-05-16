import * as React from 'react';
import Categories from '../Categories/Categories';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationContextProvider } from '../../context/LocationContext/LocationContext';
import BusinessContextProvider from '../../context/BusinessData/BusinessContext';

const App = () => {
  return (
    <LocationContextProvider>
    <BusinessContextProvider>
      <main>
        <Categories />
      </main>
    </BusinessContextProvider>
    </LocationContextProvider>
  )
}

export default App;
