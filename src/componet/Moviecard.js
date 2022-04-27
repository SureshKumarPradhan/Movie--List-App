import React from "react";
import { useDispatch } from "react-redux";
import { handel_remove } from "../action/configureAction";
const MovieCard = (props) => {
    const dispatch = useDispatch();
  const { name, rating,Id } = props;
  const handelRemove = (id) => {
   dispatch(handel_remove(id))
  }
  //console.log(props)
  return (
    <div className="col-6 col-sm-12 p-2">
      <div className="card " style={{ width: "20rem" }}>
        <div className="row">
          <div className="col-5">
            <img src="..." className="card-img-top" alt="..." />
          </div>
          <div className="card-body col-7">
            <h4 className="card-text">Name - {name.toUpperCase()}</h4>
            <p className="card-text">Rating - #{rating}</p>
            <button
              className="btn btn-outline-danger"
              style={{ float: "right" }}
              onClick={()=>{handelRemove(Id)}}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
