import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";


export default function MovieListPage(props) {
  return (
    <div className="container">
      
      <div className="row">
        {props.movies.map((movie) => (
          <Link to={`/movies/${ movie.title }`} >
          <div key={movie.title} className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={movie.posterPath} alt={movie.title} />
                <span className="card-title">{movie.title}</span>
              </div>
              <div className="card-content">
                <p>Released: {movie.releaseDate}</p>
              </div>
            </div>
          </div>
           </Link>
        ))}
      </div>
     
    </div>
  );
}

{/* <MovieCard movie={movie} /> */}


             