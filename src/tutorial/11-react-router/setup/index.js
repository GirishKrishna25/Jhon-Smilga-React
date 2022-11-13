import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      {/* Navbar present in every page */}
      <Navbar />
      {/* due to the 'Switch' first matched page only opens. 
      this is important otherwise 'Error' page opens in all pages */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        {/* when we click on a product, it opens up a new page.
        this is how it does. It's ok to use "/:id" */}
        <Route path="/person/:id" children={<Person />}></Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
