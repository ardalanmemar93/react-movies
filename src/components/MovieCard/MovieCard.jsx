import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'; 


export default function MovieCard(props) {
  return (
    <div className="col s12 m6 l4">
        <div
          style={{
            background: `url(${props.movie.posterPath}) no-repeat center center`,
            WebkitBackgroundSize: 'cover',
          }}
          className="item-card z-depth-2 hoverable"
        >
          <div className="card-content white-text">
            <span className="card-title">{props.movie.title}</span>
            <p>Released: {props.movie.releaseDate}</p>
          </div>
        </div>
    </div>
  );
}

