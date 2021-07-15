import React from 'react';
import './Movie.css';

const IMAGEPATH = "https://image.tmdb.org/t/p/w500";


const Movie = ({title, poster_path, vote_average, overview })=>{

    let className = "red";
    if(vote_average > 6.5){
        className ="yellow";
    }
    if(vote_average > 7.75){
        className ="green";
    }


    return (
        <div className ="movie">

        <div className="overview">{overview}</div>
         <img className="poster" src={IMAGEPATH + poster_path}></img>
   
                <div className="info">
                <h4>{title}</h4>
                    <p className={className}>{vote_average}</p>
                    
                </div>

        </div> 


    )

}


export default Movie;