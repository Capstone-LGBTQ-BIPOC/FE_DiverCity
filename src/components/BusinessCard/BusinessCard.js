import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import './BusinessCard.css';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';

const BusinessCard = ({ name, image, id }) => {
  const bookmark = useContext(BookmarkContext);

  return(
    <div className='business-card' id={id}>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
      <Link to={`/biz/${id}`}>
        <button>Learn More</button>
      </Link>
      <button className='bookmark-button'
      onClick={() => {bookmark.updateBookmark(id)}}>{bookmark.bookmarks.find(bm => bm.id === id)? 'Un-Bookmark' : 'Bookmark'}</button>
    </div>
  )
}

export default BusinessCard;

BusinessCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string
}