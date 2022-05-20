import { createContext, useState, useContext } from 'react'
import fetchBusinesses from '../../apiCalls'
import { LocationContext } from '../LocationContext/LocationContext'

const BusinessContext = createContext([])

const BusinessContextProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([])

  const [category, setCategory] = useState('')

  const [error, setError] = useState(null)
  
  const [isLoading, setIsLoading] = useState(true);

  const locationContext = useContext(LocationContext)

  const getBusinesses = category => {
    setIsLoading(true);
    let searchLocation = locationContext.location.city;
    if (locationContext.selectedLocation) {
       searchLocation = locationContext.selectedLocation
    }
    fetchBusinesses(searchLocation, category)
      .then(data => {
        setBusinesses(data.data)
        console.log('returned data:', data.data)
        console.log('location: ', searchLocation, 'category: ', category)
      })
      .catch(err =>
        setError('Oops, something went wrong! Please try again later.')
      ).finally(() => setIsLoading(false))
  }

  return (
    <BusinessContext.Provider
      value={{ businesses, error, getBusinesses, setCategory, category, isLoading, setBusinesses }}
    >
      {children}
    </BusinessContext.Provider>
  )
}

export { BusinessContextProvider, BusinessContext }
