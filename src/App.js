import React, { useEffect, useState } from 'react';
import Movie from './components/Movie/Movie';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";


function App(){



  const [movies,setMovies] = useState([])


useEffect(()=>{
   fetch(API_URL)
   .then(res => res.json())
   .then(data=>{
    setMovies(data.results)
  
  
   })
   
}, []);

const [searchTerm, setSearchTerm] = useState("")

const handleOnSubmit = (e)=>{
    e.preventDefault();

    fetch(SEARCHAPI + searchTerm)
    .then(res => res.json())
    .then(data=>{
     setMovies(data.results)
   
   
    })

    
  }

const  handleOnChange = (e)=>{
   setSearchTerm(e.target.value);
   
}


  return (
    <div>
     
    <div className="header">

    <form id="form" onSubmit={handleOnSubmit}>
    <input type="text" className="searchBar" placeholder="Search" onChange={handleOnChange}></input>
    </form>
   
    </div>

    <div>  
         <div className="movieContainer">  
         {movies.map((movie)=>{
                return  <Movie key={movie.id} {...movie}/>
            })}

         </div>  
    </div>
    </div>
  );
}

export default App;
