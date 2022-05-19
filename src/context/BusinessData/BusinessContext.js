import { createContext, useState, useContext } from 'react'
import fetchBusinesses from '../../apiCalls'
import { LocationContext } from '../LocationContext/LocationContext'

const BusinessContext = createContext([])

const BusinessContextProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([])

  const [category, setCategory] = useState('')

  const [error, setError] = useState(null)

  const locationContext = useContext(LocationContext)

  const getBusinesses = category => {
    let searchLocation
    if (locationContext.selectedLocation) {
       searchLocation = locationContext.selectedLocation
    } else {
       searchLocation = locationContext.location.city
    }
    fetchBusinesses(searchLocation, category)
      .then(data => {
        setBusinesses(data.data)
        console.log(data.data)
      })
      .catch(err =>
        setError('Oops, something went wrong! Please try again later.')
      )
  }

  return (
    <BusinessContext.Provider
      value={{ businesses, error, getBusinesses, setCategory, category }}
    >
      {children}
    </BusinessContext.Provider>
  )
}

export { BusinessContextProvider, BusinessContext }
