import './HomePage.css'

// Components
import Product from "../components/Product";

const HomePage = () => {
  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>

      <div className="homepage__products">
        <Product />
      </div>
    </div>
  )
}

export default HomePage;
