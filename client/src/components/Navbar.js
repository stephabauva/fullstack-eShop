import "./Navbar.css";
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link to="/" style={{textDecoration:"none"}}>
          <h2> Click&Get eShop</h2>
        </Link>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
            cart
              <span className="cartlogo__badge" >{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
          Shop
          </Link>
        </li>
      </ul>

      {/* menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
