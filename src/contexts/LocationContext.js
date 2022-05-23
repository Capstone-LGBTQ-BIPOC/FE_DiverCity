import { useState, useEffect, createContext } from 'react';
import {getGeoSSL} from 'geoplugin';

const LocationContext = createContext(null);

const apiKey = process.env.REACT_APP_API_KEY;

const LocationContextProvider = ({ children }) => {

  const [location, setLocation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  useEffect(() => {
    getGeoSSL(apiKey)
      .catch(error => console.log(error))
      .then((data) => {
        console.log(data)
        setLocation(data)
      });
  },[])

  return (
    <LocationContext.Provider value={{location, selectedLocation, setSelectedLocation}}>
        {children}
    </LocationContext.Provider>
  )
}

export {LocationContext, LocationContextProvider}