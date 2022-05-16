import { createContext, useState, useContext } from "react";
import fetchBusinesses from "../../apiCalls";

const BusinessContext = createContext([]);

const BusinessContextProvider = () => {
  
  const [businesses, setBusinesses] = useState([])

  const location = useContext(LocationContext)

}

export default BusinessContextProvider;