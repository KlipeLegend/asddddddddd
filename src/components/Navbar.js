import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { About } from './About'
import { Blog } from './Blog'
import { Home } from './Home'
import { Sermon } from './Sermon'

export const Navbar = () => {
    return (
        <>
            <Router>
                <nav className="navbar">
                    <div className="nav_logo">
                        <img src="./img/navlogo.svg" alt="" />
                    </div>
                    <ul className="nav_item">
                        <li className="nav_link">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/'>About us</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/'>Sermon</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/'>Blog</NavLink>
                        </li>
                    </ul>
                    <div className="nav_btn">
                        <button>Contact us</button>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/' element={<About />} />
                    <Route path='/' element={<Sermon />} />
                    <Route path='/' element={<Blog />} />
                </Routes>
            </Router>
        </>
    )
}
