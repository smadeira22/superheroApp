import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <main>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shows">Superheros</NavLink>
            <NavLink to="/search">Search superheros</NavLink>
        </nav>
    </header>
    <Outlet/>
    </main>
  )
}

export default Header