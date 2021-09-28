import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
// import About from "./pages/About";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          {/* <Route path="/about" component={About} exact></Route> */}
          <Route path="/products" component={Products}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
