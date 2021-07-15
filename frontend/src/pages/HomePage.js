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
  const { products, loading, error } = getProducts

  //everytime the homepage we send a dispatch to get the products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>

      <div className="homepage__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default HomePage;
