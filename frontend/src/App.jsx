import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
