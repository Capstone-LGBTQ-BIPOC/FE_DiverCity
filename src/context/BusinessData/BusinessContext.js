import { createContext, useState, useContext } from "react";
import { fetchBusinesses } from "../../apiCalls";
import { LocationContext } from "../LocationContext/LocationContext";

const BusinessContext = createContext([])

const BusinessContextProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([])

  const [category, setCategory] = useState('')

  const [error, setError] = useState(null)
  
  const [isLoading, setIsLoading] = useState(true);

  const locationContext = useContext(LocationContext)

  const getBusinesses = mainCategory => {
    setError('');
    if (!category.toLowerCase().includes(mainCategory)) {
      setBusinesses([]);
      setIsLoading(true);
      let searchLocation
      if (locationContext.selectedLocation) {
         searchLocation = locationContext.selectedLocation
      } else {
         searchLocation = locationContext.location.city
      }
      fetchBusinesses(searchLocation, mainCategory)
        .then(data => {
          setBusinesses(data.data)
          if(!businesses.length) {
            console.log(error)
            setError('No results for your search. Please check your spelling and try a new search.')
          }
        })
        .catch(err =>
          setError('Oops, something went wrong! Please try again later.')
        ).finally(() => setIsLoading(false))
    }
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
