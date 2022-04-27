import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addData } from "../action/configureAction";
const Movieform = () => {
    const dispatch = useDispatch()
    const [movieName,setMovieName] = useState('');
    const [imdbRank,setImdbRank] = useState('')
    const handelMoviename = e => {
        setMovieName(e.target.value)
    }
    const handelIMDB = e => {
        setImdbRank(e.target.value)
    }
    const handelSubmit = (e) => {
       e.preventDefault();
       const movieData = {
           id:Number(new Date()),
           moviename:movieName,
           imdbrank:imdbRank
       }
       dispatch(addData(movieData));

        setMovieName('');
      setImdbRank('');
    }
    return (
        <div className="mt-3 border p-3">
                <form onSubmit={handelSubmit}>
                    <input type="text" className="form-control" value={movieName} placeholder="Enter Movie name" onChange={handelMoviename}/>
                    <input type="text" className="form-control mt-3" value={imdbRank} placeholder="IMDB ranking" onChange={handelIMDB}/>
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                
                </form>
        </div>

    )
}
export default Movieform;