import React, { useEffect, useState } from 'react';
import Movie from './components/Movie/Movie';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";


function App(){

  const [movies,setMovies] = useState([])


useEffect(()=>{
   fetch(API_URL)
   .then(res => res.json())
   .then(data=>{
    setMovies(data.results)
    console.log(data.results)
   })
   
}, []);



  return (

    <div>  
         

         <div className="movieContainer">  
         {movies.map((movie)=>{
                return  <Movie key={movie.id} {...movie}/>
            })}

         </div>  
    </div>
  );
}

export default App;
