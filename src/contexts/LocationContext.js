import { useState, useEffect, createContext } from 'react';
import {getGeo} from 'geoplugin';

const LocationContext = createContext(null);

const LocationContextProvider = ({ children }) => {

  const [location, setLocation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('Atlanta')



  return (
    <LocationContext.Provider value={{location, selectedLocation, setSelectedLocation}}>
        {children}
    </LocationContext.Provider>
  )
}

export {LocationContext, LocationContextProvider}