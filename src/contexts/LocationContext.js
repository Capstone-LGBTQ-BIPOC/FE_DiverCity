import { useState, useEffect, createContext } from 'react';
import {getGeo} from 'geoplugin';

const LocationContext = createContext(null);

const LocationContextProvider = ({ children }) => {


  const [selectedLocation, setSelectedLocation] = useState('Atlanta')



  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation}}>
        {children}
    </LocationContext.Provider>
  )
}

export {LocationContext, LocationContextProvider}