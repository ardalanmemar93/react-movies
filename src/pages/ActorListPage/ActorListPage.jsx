// import "./ActorPage.css";
import ActorCard from "../../components/ActorCard/ActorCard";
import "materialize-css/dist/css/materialize.min.css";

export default function ActorListPage({ movies }) {
  const actorList = movies.reduce((actors, m) => {
    m.cast.forEach((a) => {
      if (!actors.includes(a)) actors.push(a);
    });
    return actors;
  }, []);

  
  return (
    <div className="container">
      <ul className="collection">
        {actorList.map((actor) => (
          <ActorCard key={actor} actor={actor} />
        ))}
      </ul>
    </div>
  );
}


// const uniqueActors = [...new Set(movies.flatMap(movie => movie.cast))];
