import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "../BusinessData/BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    const updatedArray = biz.businesses.map(business => {
      if(business.id === id && !business.isSaved){
        business.isSaved = true
        console.log(business, 'business')
      } else if (
        business.id === id && business.isSaved) {
          business.isSaved = false
        }
      return business
    })
    setBookmarked(updatedArray)
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
