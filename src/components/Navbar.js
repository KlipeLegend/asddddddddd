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
                    <ul className="nav_item">
                        <li className="nav_link">
                            <img src="./img/navlogo.svg" alt="" />
                        </li>
                        <li className="nav_link">
                            <NavLink selected='activcalssname' to='/'>Home</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink selected='activcalssname' to='/about'>About us</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink selected='activcalssname' to='/sermon'>Sermon</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink selected='activcalssname' to='/blog'>Blog</NavLink>
                        </li>
                    </ul>
                    <div className="nav_btn">
                        <button className='all_button'>Contact us</button>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/sermon' element={<Sermon />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </Router>
        </>
    )
}