import { createContext, useState, useContext } from "react";
import fetchBusinesses from "../../apiCalls";

const BusinessContext = createContext([]);

const BusinessContextProvider = () => {
  
  const [businesses, setBusinesses] = useState([])

  const location = useContext(LocationContext)

  const getBusinesses = (category) => {
    fetchBusinesses(location.city, category)
    .then(data => setBusinesses(data.data))
  }
}

export default BusinessContextProvider;