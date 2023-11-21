import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage(props) {
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((movie, index) => (
          <div key={movie.title} className="col s12 m6">
            
            <MovieCard movie={movie} />
            {(index + 1) % 2 === 0 && <div className="clearfix hide-on-large-only"></div>}
            
          </div>
        ))}
      </div>
    </div>
  );
}
