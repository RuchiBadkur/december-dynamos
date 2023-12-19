import React,{useState} from 'react';
import moviesData from "../data/moviesData";

const MovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState("");

    return(
        <>
            <div className="movieNames-list">
                {
                    moviesData.map((item)=>(
                        <p onClick={()=>setSelectedMovie(item)}>{item.title}</p>
                    ))
                }
            </div>
        </>
    )
}

export default MovieList;