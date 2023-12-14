import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <h1>Welcome to Superhero</h1>
    <em>wowwwww</em>
    <ul>
      <li>
      <Link to="/superheros">Explore Superhero</Link>
      </li>
      <li>
      <Link to="/search">Search your favourites super hero</Link>
      </li>
    </ul>
    </>
  )
}

export default HomePage