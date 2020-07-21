import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//  import pages

import Home from "./pages/Home";
import About from "./pages/About";
import SingleHero from "./pages/SingleHero";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/superhero/:id">
          <SingleHero />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
