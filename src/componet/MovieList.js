import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";
import { useDispatch } from "react-redux";
const MovieList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => {
    return state.moviedata;
  });
  const [search, setsearch] = useState("");
  const [order, setorder] = useState("");
  console.log(store);
  const handelSearch = (e) => {
    setsearch(e.target.value);
  };
  const filterVal = (arr) => {
    const filterValues = arr.filter((val) => {
      return val.moviename.toLowerCase().includes(search.toLowerCase());
    });
    return filterValues;
  };
  const handelOrder = (e) => {
    setorder(e.target.value);
  };
  const show = () => {
    switch (order) {
      case "A-Z": {
        return store.sort(function (a, b) {
          return a.moviename.localeCompare(b.moviename);
        });
      }
      case "Z-A": {
        return store.sort(function (a, b) {
          return b.moviename.localeCompare(a.moviename);
        });
      }
      case "low_to_high":{
          return store.sort(function (a,b){return (a.imdbrank - b.imdbrank)})
      }
      case "high_to_low":{
        return store.sort(function (a,b){return (b.imdbrank - a.imdbrank)})
    }
      default: {
        return [...store];
      }
    }
  };
  console.log(show());
  return (
    <>
      <input
        type="text"
        placeholder="search movies"
        value={search}
        onChange={handelSearch}
      />{" "}
      <select className="select" value={order} onChange={handelOrder}>
        <option selected>Order By</option>
        <option value="A-Z">A-z</option>
        <option value="Z-A">Z-A</option>
        <option value="high_to_low">Rank - high to low</option>
        <option value="low_to_high">Rank - low to high</option>
      </select>
      <div className="row">
        {filterVal(show()).map((val) => {
          return (
            <MovieCard
              key={val.id}
              Id={val.id}
              name={val.moviename}
              rating={val.imdbrank}
            />
          );
        })}
      </div>
    </>
  );
};
export default MovieList;
