import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import GoalBox from "./GoalBox.jsx";
import GoalBox2 from "./GoalBox2.jsx";

//import { Switch, Route } from "react-router-dom";
//import MyHabits from "./MyHabits/MyHabits.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <br />
        <GoalBox2></GoalBox2>
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
