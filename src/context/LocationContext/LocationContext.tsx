import * from 'react';
import { useState, useEffect, createContext } from 'react';
import {getGeo} from 'geoplugin';

const LocationContext = createContext(null);

const LocationContextProvider = ({ children }) => {

  const [location, setLocation] = useState('')

  useEffect(() => {
    getGeo()
    .then(response => response.json())
    .catch(error => console.log(error))
    .then((data) => setLocation(data));
  })

  return (
    <LocationContext.Provider value={location}>
        {...children}
    </LocationContext.Provider>
  )
}

export default LocationContext