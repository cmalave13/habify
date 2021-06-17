import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Months from "./AllMonths.jsx";
import June from "./jun.jsx";
import Login from "./Login.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import { Switch, Route } from "react-router-dom";
//import MyHabits from "./MyHabits/MyHabits.jsx";

class App extends Component {
  render() {
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
  }
}

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Welcome} />
//       <Route exact path="/habits" component={MyHabits} />
//     </Switch>
//   );
// }

export default App;
