import React from "react";
import "materialize-css/dist/css/materialize.min.css"; 

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div className="card"> {/* Use Materialize CSS card class */}
      <div className="card-image">
        <img src={`https://picsum.photos/${num}`} alt={`${actor} background`} />
        <span className="card-title">{actor}</span>
      </div>
    </div>
  );
}