import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "./BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    const updatedArray = biz.businesses.map(business => {
      if(business.id === id){
        business.isSaved = !business.isSaved
        return business
      }
      return business
    })
    setBookmarks([...bookmarks, ...updatedArray])
  }

  return (
    <BookmarkContext.Provider
      value={{bookmarks, updateBookmark}}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export { BookmarkContextProvider, BookmarkContext }
