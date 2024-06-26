import React, {useState} from "react";
import "./style.css";

const moviesData = [
    {
      title: "Inception",
      actor: "Leonardo DiCaprio",
      genre: "Sci-Fi",
      director: "Christopher Nolan"
    },
    {
      title: "The Dark Knight",
      actor: "Christian Bale",
      genre: "Action",
      director: "Christopher Nolan"
    },
    {
      title: "Forrest Gump",
      actor: "Tom Hanks",
      genre: "Drama",
      director: "Robert Zemeckis"
    },
    {
      title: "The Shawshank Redemption",
      actor: "Tim Robbins",
      genre: "Drama",
      director: "Frank Darabont"
    },
    {
      title: "The Godfather",
      actor: "Marlon Brando",
      genre: "Crime",
      director: "Francis Ford Coppola"
    }
  ];
  
  console.log(moviesData);
  

const OldApp = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
    
 
  function showDetails(movie){
    setSelectedMovie(movie);
    // console.log(movie);
  }

    return (
        <>
        {/* <h1>hello from App</h1> */}

        {/* display movies name */}
        

            {/* display movie details */}
          
        </>
    )
}

export default OldApp;