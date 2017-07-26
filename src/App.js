import React, { Component } from 'react';
//modules
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

// Project files
import Home from './components/Home'
import Admin from './components/Admin'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/admin/:section?" component={Admin}/>
          </div>
        </Router>
    );
  }
}

export default App;
