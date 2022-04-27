import React from "react";
import MovieContainer from "./componet/MovieContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
    return (
        <div className="container">
            <h1>My Big Movie List</h1>
            <MovieContainer/>
        </div>
    )
}

export default App;