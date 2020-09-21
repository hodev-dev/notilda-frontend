import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
