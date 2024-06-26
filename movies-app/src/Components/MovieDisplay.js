import React from "react";


const MovieDisplay = ({clickedMovies}) => {
    console.log(clickedMovies);
    return (
        <>
            <div className="movie-display">
            {
              clickedMovies !== null && (
                <div>
                  <h1>{clickedMovies.title}</h1>
                  <p>{clickedMovies.actor}</p>
                  <p>{clickedMovies.genre}</p>
                  <p>{clickedMovies.director}</p>
                </div>
              )
            }
          </div>
        </>
    )
}

export default MovieDisplay;