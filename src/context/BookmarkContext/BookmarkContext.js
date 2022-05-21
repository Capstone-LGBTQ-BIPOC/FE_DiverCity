import { createContext, useState, useContext } from "react";
import { BusinessContext  } from "../BusinessData/BusinessContext";

const BookmarkContext = createContext(false)

const BookmarkContextProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([])
  
  const updateBookmark = event => {
    const updatedArray = BusinessContext.businesses.map(biz => {
      if(event.target.id === biz.id && !biz.isSaved){
        biz.isSaved = true
      } else if (
        event.target.id === biz.id && biz.isSaved) {
          biz.isSaved = false
        }
      return biz
    })
    setBookmarked({updatedArray})
  }

  return (
    
  )
}

export { BookmarkContextProvider, BookmarkContext }