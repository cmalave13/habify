import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Months from "./AllMonths.jsx";
import June from "./jun.jsx";
import Login from "./Login.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import { Switch, Route } from "react-router-dom";
//import MyHabits from "./MyHabits/MyHabits.jsx";

const App = () => {
  // const location = useLocation();

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Months} />
          <Route path="/Login" exact component={Login} />
          <Route path="/June" exact component={June} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
