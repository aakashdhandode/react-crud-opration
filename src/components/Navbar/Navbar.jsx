import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className='container'>
                    <NavLink className="navbar-brand" to="/home">
                        <b>LOGO</b>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>           
                        </ul>
                    </div>
                    <Link className='btn btn-outline-light e-25' to="/users/add">Add Users</Link>
                </div>
            </nav>
    </div>
  )
}

export default Navbar