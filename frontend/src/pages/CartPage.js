import './CartPage.css'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

//components
import CartItem from '../components/CartItem';

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
  <div className="cartpage">
    <div className="cartpage__left">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty <Link to="/">Go Back</Link>
        </div>
      ) : cartItems.map(item => (
        <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
      ))}
    </div>
    <div className="cartpage__right">
      <div className="cartpage_info">
        <p>Subtotal (0) items</p>
        <p>$99</p>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  </div>
  );
};

export default CartPage;