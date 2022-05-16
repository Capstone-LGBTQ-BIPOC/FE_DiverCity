import { createContext, useState, useContext } from "react";
import fetchBusinesses from "../../apiCalls";

const BusinessContext = createContext([]);

const BusinessContextProvider = () => {
  
  const [businesses, setBusinesses] = useState([]);

  const [error, setError] = useState(null);

  const location = useContext(LocationContext)

  const getBusinesses = (category) => {
    fetchBusinesses(location.city, category)
    .then(data => setBusinesses(data.data))
    .catch(err => setError('something went wrong try again later'))
  }
}

export default BusinessContextProvider;