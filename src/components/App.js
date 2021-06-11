import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome.jsx";
import MyHabits from "./MyHabits/MyHabits.jsx";

class App extends Component {
  render() {
    return <Welcome></Welcome>;
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
