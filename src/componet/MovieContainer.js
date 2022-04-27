import React from "react";
import Movieform from "./Movieform";
import MovieList from "./MovieList";
import MovieState from './MovieState';
const MovieContainer = () =>{
 return (
     <div className="row">
     <div className="col-7">
     <MovieList/>
     </div>
     <div className="col-5">   
       <Movieform/> 
       <MovieState/>
     </div>
     </div>
 )
}

export default MovieContainer;