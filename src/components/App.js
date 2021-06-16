import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Months from "./AllMonths.jsx";
import June from "./jun.jsx";
import June2 from "./jun2.jsx";

//import { Switch, Route } from "react-router-dom";
//import MyHabits from "./MyHabits/MyHabits.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <br />
        <Months></Months>
        <June2></June2>
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
