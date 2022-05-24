import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "./BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    if (!bookmarks.find(bm => bm.id === id)) {
      const updatedBusiness = biz.businesses.filter(business => {
        if (business.id === id) {
          business.isSaved = !business.isSaved
          return business
        }
      })
      const newBookmarks = [...bookmarks, ...updatedBusiness].filter(biz => biz.isSaved);
      setBookmarks(newBookmarks)
    } else {
      const newBookmarks = bookmarks.filter(bm => bm.id !== id);
      setBookmarks(newBookmarks);
    }
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
