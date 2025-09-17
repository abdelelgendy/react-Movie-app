import React from 'react';

const MovieCard = ({movie:{title, vote_average, poster_path, release_Date, original_language}}) => {
    return(
        <div className='movie-card'>
            <img src={poster_path? `http://image.tmdb.org/t/p/w500/${poster_path}` :'/no-movie.png'} alt="movie poster" />

        <div className='mt-4'>
            <h3>{title}</h3>
            <div className='content'>
                <div className='ratings'>
                    <img src="star.svg" alt="star Icon" />
                </div>
            </div>
        </div>
        </div>
    )
};

export default MovieCard;
