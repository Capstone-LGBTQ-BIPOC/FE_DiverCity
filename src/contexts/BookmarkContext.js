import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "./BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    const updatedArray = biz.businesses.map(business => {
      if(business.id === id){
        business.isSaved = !business.isSaved
        return business
      }
      return business
    })
    setBookmarked([...bookmarked, ...updatedArray])
  }

  return (
    <BookmarkContext.Provider
      value={{bookmarked, updateBookmark}}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export { BookmarkContextProvider, BookmarkContext }
