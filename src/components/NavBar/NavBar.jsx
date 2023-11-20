import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar({user}) {
  return (
    <nav>
        <h1>{user} Wanna Watch Something Spooky? </h1>
        <Link to="/">Movies</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/Actors">Actors</Link>
    </nav>
  )
}
