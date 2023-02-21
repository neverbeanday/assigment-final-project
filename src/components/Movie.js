import React from 'react';

// styles
import './Movie.scss';

const Movie = (props) => {
  return (
    <div className='movies'>
      {props.movies.Search
        ? props.movies.Search.map((val, key) => {
            return (
              <div className='card' key={key}>
                <img src={val.Poster} alt='poster' />
                <div className='poster-title'>
                  <p>{val.Title}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Movie;
