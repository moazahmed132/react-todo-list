import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className="navbar">
      <ul className="list">
        <NavLink exact to="/">Todos</NavLink>
        <NavLink to="/Done_todos">Done-Todos</NavLink>
      </ul>
    </div>
  )
}

export default Nav;
