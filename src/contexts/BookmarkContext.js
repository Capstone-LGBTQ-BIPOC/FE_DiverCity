import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "./BusinessContext";

const BookmarkContext = createContext([])

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([])

  const biz = useContext(BusinessContext)

  const updateBookmark = (id) => {
    if (!bookmarks.find(bm => bm.id === id)) {
      const businessToBookmark = biz.businesses.find(business => business.id === id);
      businessToBookmark.isSaved = true;
      
      const newBookmarks = [...bookmarks, businessToBookmark].filter(biz => biz.isSaved);
      setBookmarks(newBookmarks)
    } else {
      const newBookmarks = bookmarks.filter(bm => bm.id !== id);
      setBookmarks(newBookmarks);
    }
  }

  return (
    <BookmarkContext.Provider value={{bookmarks, updateBookmark}}>
      {children}
    </BookmarkContext.Provider>
  )
}

export { BookmarkContextProvider, BookmarkContext }
