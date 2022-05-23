import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "./BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    const updatedBusiness = biz.businesses.filter(business => {
      if (business.id === id) {
        business.isSaved = !business.isSaved
        return business
      }
    })
    setBookmarks([...bookmarks, ...updatedBusiness])
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
