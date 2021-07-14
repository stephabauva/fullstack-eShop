import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar __logo">
        <h2> MERN eShop</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart ">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
          Shop
          </Link>
        </li>
      </ul>

      {/* menu */}
      <div classsName="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
