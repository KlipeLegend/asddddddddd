import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { About } from './About'
// import { Footer } from './All'
import { Blog } from './Blog'
import { Home } from './Home'
import { Sermon } from './Sermon'
import { All3, CardTwo } from './All'
import { All2 } from './All'
import { Post } from './All'
import { Post2 } from './All'
import { Footer } from './All'
import { Over } from './All'
import { Love } from './All'
import { Benefits } from './All'
import {Contact} from './Contact'
export const Navbar = () => {
    return (
        <>
            <Router>
                <nav className="navbar">
                    <div className="nav_logo">
                        <img src="./img/Vector.png" alt="" />
                    </div>
                    <ul className="nav_item">
                        <li className="nav_link">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/about'>About us</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/sermon'>Sermon</NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink to='/blog'>Blog</NavLink>
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


                </Routes>
                {/* <All2/>
                <All3/>
    <Over />
    <Love />
   <Benefits/> */}
                {/* <CardTwo/> */}
                <Footer />
            </Router>

        </>
    )
}
