import React, { useState } from 'react';
import { useGenreNames } from '../../Utility/Hooks/movieHooks';
import { getMovieUrl } from '../../Utility/Utility';
import Rating from '../UI/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css'

const Card = ({ imagePath, title, releaseDate, imdbRating, tomatoRating, genre, movie, onAddToFavorites }) => {
  const genreNames = useGenreNames(genre);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (event) => {
    event.stopImmediatePropagation(); // This will prevent the event from being captured by other listeners
    setIsFavorite(!isFavorite);
    onAddToFavorites(movie);
  };
  
  return (
    <div className="flex flex-col" data-testid="movie-card">
      {/* Poster */}
      <div>
        <img
          src={getMovieUrl(imagePath)}
          alt={title}
          data-testid="movie-poster"
        />
      </div>
      {/* Info */}
      <div className="flex flex-col items-center">
        {/* Release Date */}
        <p
          className="text-[#9CA3AF] text-xs font-bold mt-4"
          data-testid="movie-release-date"
        >
          {releaseDate}
        </p>
        {/* Title */}
        <h1 className="font-bold text-lg mt-5" data-testid="movie-title">
          {title}
        </h1>
        {/* Ratings */}
        <div className="flex items-center mt-3">
          <Rating>
          <div>
          imdbRating={imdbRating}
          </div>
          <div>
          tomatoRating={tomatoRating}
          </div> </Rating>
          
          <div onClick={(event) => handleFavoriteClick(event)}>
            <FontAwesomeIcon 
              icon={isFavorite ? fasHeart : farHeart} 
              style={{ color: isFavorite ? 'red' : 'grey' }} 
              className={isFavorite ? 'pop' : ''}
              data-testid='add-to-favorites'
            />
          </div>
        </div>
        {/* Genre */}
        <p className="text-[#9CA3AF] text-xs font-bold mt-3 mb-20">
          {genreNames.map((genre) => {
            return `${genre} `;
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
