import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../LoginPage/LoginPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import ActorPage from '../ActorListPage/ActorListPage'
import './App.css'
import { movies } from "../../data.js";

function App() {
 const [user, setUser] = useState(null)

  return (
    <main className="App">
    {user ? (
      <>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<MoviesListPage movies={movies} />}/>
          <Route path="/movies/:movieName"  element={<MovieDetailPage movies={movies} />}
          />
          <Route path="/actors" element={<ActorPage  movies={movies} />} />
        </Routes>
      </>
    ) : (
      <LoginPage setUser={setUser} />
    )}
  </main>
  )
}

export default App
