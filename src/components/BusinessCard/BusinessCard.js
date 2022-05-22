import { React, useContext } from 'react';
import './BusinessCard.css';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../context/BookmarkContext/BookmarkContext';

const BusinessCard = ({ name, image, id }) => {
  const bookmark = useContext(BookmarkContext);

  return(
    <div>
      <img src={image} alt={`${name}`}/>
      <p>{name}</p>
      <Link to={`/biz/${id}`}>
        <button>Learn More</button>
      </Link>
      <button className='bookmark-button'
      onClick={(event) => bookmark.updateBookmark(event)}>Bookmark</button>
    </div>
  )
}

export default BusinessCard;