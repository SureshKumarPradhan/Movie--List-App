import React from "react";
import { useSelector } from "react-redux";
const MovieState = () => {
    const state =  useSelector((state)=>{
        return state.moviedata;
    })
    const TopMovies = state.sort((a,b)=>b.imdbrank - a.imdbrank)
    //console.log(TopMovies)
  return (
    <div className="mt-5 border p-3">
      <h4>TOP MOVIES</h4>
      {
          TopMovies.map(val=>{
              return <div key={val.id} >
                   <p> #{val.imdbrank} name-{val.moviename}</p>
              </div>
          })
      }
    </div>
  );
};

export default MovieState;
