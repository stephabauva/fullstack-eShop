import './HomePage.css'
import {useEffect} from 'react'; //to get and list on teh homepage all of the products from the store
import {useSelector, useDispatch} from 'react-redux';

// Components
import Product from "../components/Product";

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'

const HomePage = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector(state  => state.getProducts); 
  //this useSelector returns the state.getProducts
  //A selector is a function that accepts Redux state as an argument and returns data that is derived from that state
  //useSelector() subscribes to the Redux store, and runs whenever an action is dispatched

  const { products, loading, error } = getProducts  //destructure and get the getProducts array


  //everytime the homepage loads we send a dispatch to get the products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>

      <div className="homepage__products">
      
        {loading ? (
          <h2>Loading...</h2> 
        ) : error ? (
          <h2>{error}</h2> 
        ) : (
            products.map((product) => <Product 
              key={product._id} 
              productId={product._id} 
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              description={product.description}
              />)
        )}
          {/* if loading == true, display "Loading..." or if there is an error display the error messsage
if not loading nor error, then map through the products and for each product apply the Product component */}
        
      
      </div>
    </div>
  )
}

export default HomePage;
