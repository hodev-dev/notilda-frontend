import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path="/about">
            <div className="w-64 h-64 bg-red-500">about</div>
          </Route>
          <Route path="/">
            <div className="w-64 h-64 bg-red-800">home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
