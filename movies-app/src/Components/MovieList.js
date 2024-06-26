import React, {useState} from "react";
import moviesData from "../data/moviesData";
import MovieDisplay from "./MovieDisplay";

const MovieList = ({updateSelectedMovies}) => {
    // const [selectedMovie, setSelectedMovie] = useState(null);
    return (
        <>

            {/* display movie name */}
            <div className="movie-list">
                {
                    moviesData.map((item) => (
                        <p onClick={()=>updateSelectedMovies(item)}>{item.title}</p>
                    ))
                }
            </div>

            {/* display movie details */}
            {/* <MovieDisplay clickedMovies={selectedMovie} /> */}
        </>
    )
}

export default MovieList;