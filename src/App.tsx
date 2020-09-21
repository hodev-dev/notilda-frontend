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


// import pages
import Home from './pages/Home';

let store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch >
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
