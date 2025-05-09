import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Movie = () => {

  const movieDetails = useSelector((state) => state.movieDetails);

//   useEffect(() => {
//     console.log(movieDetails);
//   });
  return (
    <div style={{ padding: 20, color: 'white',backgroundColor: 'red' }}>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            style={{ width: 300, borderRadius: 10 }}
          />
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default Movie;
