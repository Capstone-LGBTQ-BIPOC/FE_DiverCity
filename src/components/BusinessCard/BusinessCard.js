import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import './BusinessCard.css';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';

const BusinessCard = ({ name, image, id }) => {
  const bookmark = useContext(BookmarkContext);

  return(
    <div className='business-card' id={id}>
      <div className='business-image-container'>
        <img className='business-image' src={image} alt={`${name}`}/>
      </div>
      <div className='business-info-container'>
        <div >
          <p className='business-name'>{name}</p>
        </div>
        <div className='business-card-buttons'>
          <Link to={`/biz/${id}`}>
            <button className='learn-more-button'>Learn More</button>
          </Link>
          <button className='bookmark-button'
          onClick={() => {bookmark.updateBookmark(id)}}>{bookmark.bookmarks.find(bm => bm.id === id)? 'Un-Bookmark' : 'Bookmark'}</button>
        </div>

      </div>
    </div>
  )
}

export default BusinessCard;

BusinessCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string
}