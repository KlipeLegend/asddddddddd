import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { About } from './About'
import { Blog } from './Blog'
import { Home } from './Home'
import { Sermon } from './Sermon'
import { Post } from './All'
import { Post2 } from './All'
import { Footer } from './All'
import { Contact } from './Contact'
export const Navbar = () => {
    return (
        <>
            <Router>
                <nav className="navbar">
                    <div className="nav_logo">
                        <img src="./img/navlogo.svg" alt="" />
                    </div>
                    <ul className='nav_item1'>
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
                        <NavLink to='/contact'>
                            <button className='all_button1111'>Contact us</button>
                        </NavLink>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/sermon' element={<Sermon />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/post2' element={<Post2 />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes >
                <Footer />
            </Router >

        </>
    )
}