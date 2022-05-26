import { React, useContext } from 'react'
import './Bookmarks.css'
import { BookmarkContext } from '../../contexts/BookmarkContext'
import BusinessCard from '../BusinessCard/BusinessCard'

const Bookmarks = () => {
  const bookmarks = useContext(BookmarkContext)

  const savedBusinesses = bookmarks.bookmarks.map(business => {
    if (business.isSaved) {
      return (
        <BusinessCard name={business.attributes.name} image={business.attributes.image} key={business.id} id={business.id} />
      )
    }
  })

  return (
    <div className='bookmarks-container'>
      {!savedBusinesses.length && (
        <p>
          You have no saved businesses, try adding some!
        </p>
      )}
      <div className='saved-businesses'>{savedBusinesses}</div>
    </div>
  )
}

export default Bookmarks