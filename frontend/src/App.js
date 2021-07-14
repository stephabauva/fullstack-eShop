import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "../../frontend/src/components/Navbar";
import Backdrop from "../../frontend/src/components/Backdrop"
import SideDrawer from "../../frontend/src/components/SideDrawer"

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar  click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
