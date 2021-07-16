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

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0); 
    //the type of qty in state is string so Number to convert
    // 0 is our startign quantity
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    //0 is the starting price
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
        <p>Subtotal: {getCartCount()} items</p>
        <p>${getCartSubTotal().toFixed(2)}</p>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  </div>
  );
};

export default CartPage;