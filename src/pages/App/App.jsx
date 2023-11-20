import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../LoginPage/LoginPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import ActorPage from '../ActorListPage/ActorListPage'
import './App.css'

function App() {
 const [user, setUser] = useState(null)

  return (
    <main className="App">
    {user ? (
      <>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<MoviesListPage />}/>
          <Route path="/movies/:movieName"  element={<MovieDetailPage />}/>
          <Route
            path="/movies/:movieName"
            element={<MovieDetailPage  />}
          />
          <Route path="/actors" element={<ActorPage />} />
        </Routes>
      </>
    ) : (
      <LoginPage setUser={setUser} />
    )}
  </main>
  )
}

export default App
