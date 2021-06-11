import React, { Component } from "react";
import Welcome from "./Welcome/Welcome.jsx";
//import { Switch, Route } from "react-router-dom";
//import MyHabits from "./MyHabits/MyHabits.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>yo this is a test</h1>
        <Welcome></Welcome>
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
