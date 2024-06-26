import React, {useState} from "react";
import "./style.css";

import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log(selectedMovie);

    return (
        <>
          {/* display movies name */}
          <MovieList updateSelectedMovies={setSelectedMovie}/>

          {/* display movie details */}
          <MovieDisplay clickedMovies={selectedMovie}/>
        </>
    )
}

export default App;