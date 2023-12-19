// display title and when you click on it all the other details will be displayed
import React, {useState} from "react";
import "./style.css"; //complete file is executable rather one or two components

let moviesData = [
    {
        title: "Dilwale Dulhania Le Jayenge",
        actor: "Shah Rukh Khan",
        genre: "Romance, Drama",
        director: "Aditya Chopra"
    },
    {
        title: "Sholay",
        actor: "Dharmendra, Amitabh Bachchan",
        genre: "Action, Adventure",
        director: "Ramesh Sippy"
    },
    {
        title: "3 Idiots",
        actor: "Aamir Khan",
        genre: "Comedy, Drama",
        director: "Rajkumar Hirani"
    },
    {
        title: "Lagaan",
        actor: "Aamir Khan",
        genre: "Drama, Sport",
        director: "Ashutosh Gowariker"
    },
    {
        title: "Kuch Kuch Hota Hai",
        actor: "Shah Rukh Khan, Kajol",
        genre: "Romance, Drama",
        director: "Karan Johar"
    },
    {
        title: "Andaz Apna Apna",
        actor: "Aamir Khan, Salman Khan",
        genre: "Comedy, Drama",
        director: "Rajkumar Santoshi"
    },
    {
        title: "Dil Chahta Hai",
        actor: "Aamir Khan, Saif Ali Khan",
        genre: "Drama, Romance",
        director: "Farhan Akhtar"
    },
    {
        title: "Mughal-E-Azam",
        actor: "Dilip Kumar, Madhubala",
        genre: "Drama, Romance",
        director: "K. Asif"
    },
    {
        title: "Queen",
        actor: "Kangana Ranaut",
        genre: "Comedy, Drama",
        director: "Vikas Bahl"
    },
    {
        title: "Gully Boy",
        actor: "Ranveer Singh, Alia Bhatt",
        genre: "Drama, Music",
        director: "Zoya Akhtar"
    }
];


const OldApp = () => {

    const[selectedMovie, setSelectedMovie] = useState("");

    function showDetails(movie){
        // console.log(movie);
        setSelectedMovie(movie);
    }

    return(
        <>

            <div className="movieNames-list">
                {
                    moviesData.map((item)=>(
                        <p onClick={()=>showDetails(item)}>{item.title}</p>
                    ))
                }
            </div>

            <div className="movie-display">
                {
                    //selectedMovie!=" "? "" : ""
                    selectedMovie!=="" && (
                        <div>
                            <h1>{selectedMovie.title}</h1>
                            <p>{selectedMovie.actor}</p>
                            <p>{selectedMovie.genre}</p>
                            <p>{selectedMovie.director}</p>
                        </div>
                    )
                    // the next condition after && will execute only if the first condition is true
                }
            </div>

        </>
    )
}

export default OldApp;