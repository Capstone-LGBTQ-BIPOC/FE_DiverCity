import { useState, useEffect, createContext } from 'react';
import {getGeo} from 'geoplugin';

const LocationContext = createContext(null);

const LocationContextProvider = ({ children }) => {

  const [location, setLocation] = useState('')
  const [userLocation, setUserLocation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  useEffect(() => {
    getGeo()
      .catch(error => console.log(error))
      .then((data) => setLocation(data));
  }, [])
  
  // useEffect(() => { 
  //   setLocation(selectedLocation)
  // }, [selectedLocation])

  return (
    <LocationContext.Provider value={{location, selectedLocation, setSelectedLocation}}>
        {children}
    </LocationContext.Provider>
  )
}

export {LocationContext, LocationContextProvider}