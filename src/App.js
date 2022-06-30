import './App.css';
// import All from './pages/command/All';
// import All3 from './pages/command/All3';
import Case from './pages/Case';
import Dacode from './pages/Dacode';
import All from './pages/All';
import Blog from './pages/blog';
import Service from './pages/Service';
import Like from './pages/Like';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function From() {
  return (
    <div className="From">
      {/* <All /> */}
      {/* <All3 /> */}
      <Router>
          <nav className="navbar ">
            <ul className="navul">
              <li>
                <Link to="/" className="nav_link">Home</Link>
              </li>
              <li>
                <Link to="/service" className="nav_link">Clothes</Link >
              </li>
              <li>
                <Link to="/case" className="nav_link">Shoes</Link >
              </li>




            </ul>
            <button className="Safari">
              <img src="./img/icon/Safari.svg" alt="" />
            </button>
            <div className="logos">
              <div className='logos1'>
                <input type="text" placeholder='Search...' />
                <img src="./img/icon/search.svg" alt="" />
              </div>
              <div className='logos2'>
                <Link to="/person" className="nav_link"> <img src="./img/icon/person.svg" alt="" /> </Link >
                <Link to="/shop" className="nav_link"> <img src="./img/icon/shop.svg" alt="" /></Link >
                <Link to="/like" className="nav_link"> <img src="./img/icon/heart.svg" alt="" /> </Link >


              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" exact element={<All />} />
            <Route path="/service" element={<Service />} />
            <Route path="/case" element={<Case />} />
            <Route path="/person" element={<Dacode />} />
            <Route path="/shop" element={<Blog />} />
            <Route path="/like" element={<Like />} />
          </Routes>
        </Router>
    </div>
    
  );

}

export default From;

export const Footer = () => {
  return (
    <div className="footer">
      <div className="onsu">
        <button class="ul">
          <img src="./img/icon/Logo1.svg" alt="" />
        </button>
        <div className="li">
          <p>About us</p>
          <p>Constact</p>
          <p> Terms & Conditions</p>
        </div>
        <div className="li1">
          <div>
            <img src="./img/icon/facebook.svg" alt="" />
            <p>Facebook</p>
          </div>
          <div>
            <img src="./img/icon/twitter.svg" alt="" />
            <p>Twitter</p>
          </div>
          <div>
            <img src="./img/icon/instagram.svg" alt="" />
            <p>Instagram</p>
          </div>
        </div>

        <div className="li2">
          <h1>Subscribe to our newslater</h1>
          <form action="" className='form'>
            <input type="text " placeholder='Email Addres' />
            <button>OK</button>
          </form>
        </div>
        <div className="li3">
          <p>497 Evergreen Rd, Roseville, CA 95673</p>
          <p>+998906420121</p>
          <p>tolibjon960110@gmail.com</p>
        </div>
      </div>


    </div>
  )
}