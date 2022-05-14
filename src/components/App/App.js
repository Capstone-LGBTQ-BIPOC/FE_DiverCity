import * as React from 'react';
import Categories from '../Categories/Categories';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationContextProvider from '../../context/LocationContext/LocationContext';

const App = () => {
  return (
    <LocationContextProvider>
      <main>
        <Categories />
      </main>
    </LocationContextProvider>
  )
}

export default App;
