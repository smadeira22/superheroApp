import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <h1>Welcome to the Superheros website search</h1>
    <em>wowwwww</em>
    <ul>
      <li>
        <Link to="/search">Search your favourites super hero</Link>
      </li>
      <li>
        <Link to="/superheros/:id">Check most popular superheros</Link>
      </li>
    </ul>
    </>
  )
}

export default HomePage