import React from "react";
import { useParams } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"; // Import Materialize CSS
// import "./MovieDetailPage.css";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();
  let movie = movies.find((mov) => mov.title === movieName);

  return (
    <div className="row movie-detail-container">
      <div className="col s12 m6">
        <h1>{movie.title}</h1>
        <h4>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
        <h3>Cast Members:</h3>
        <ul className="collection">
          {movie.cast.map((actor) => (
            <li key={actor} className="collection-item">
              {actor}
            </li>
          ))}
        </ul>
      </div>
      <div className="col s12 m6">
        <img src={`${movie.posterPath}`} alt={movie.title} className="responsive-img" />
      </div>
    </div>
  );
}
