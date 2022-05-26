import { useState, createContext } from 'react';

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