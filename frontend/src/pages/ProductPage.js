import './ProductPage.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

//Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const  ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]); //--> dependencies

  return <div className="productscreen">
    {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
      <> {/* --> fragment */}
        <div className="productscreen_left">
      <img src={product.imageUrl}
      alt={product.name}/>
    </div>

    <div className="left__info">
        <p className="left__name">{product.name}</p>
        <p>Price: $ {product.price}</p>
        <p>Description: {product.description}</p>
    </div>

    <div className="productscreen__right">
      <div className="right__info">
        <p>
          Price: <span>${product.price}</span>
        </p>
        <p>
          Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of stock"}</span>
        </p>
        <p>
          Qty
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
            {
              [...Array(product.countInStock).keys()].map((x) => (
                  <option key={x+1} value={x+1}>{x+1}</option>))
            }
          </select>
        </p>
        <p>
          <button type="button">Add to cart</button>
        </p>
      </div>
    </div>
      </>

    )}
    
  </div>
};

export default ProductPage