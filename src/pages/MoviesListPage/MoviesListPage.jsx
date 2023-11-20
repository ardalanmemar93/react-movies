import React from 'react'
import {Link} from 'react-router-dom';

export default function MoviesListPage() {
  return (
    <>
    <h1>MoviesListPage</h1>
    <Link to="/movies/:movieName">MovieDetailPage</Link>
    </>
  )
}
