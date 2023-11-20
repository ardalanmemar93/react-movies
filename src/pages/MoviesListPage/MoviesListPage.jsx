import MovieCard from "../../components/MovieCard/MovieCard"
import './MovieListPage.css'


export default function MovieListPage(props) {
  return (
    <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}
