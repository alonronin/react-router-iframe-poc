import React from 'react';
import { observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'

import Home from './Home';
import Dashboard from './Dashboard';
import Iframe from './Iframe';

function App() {
  return <Router>
    <div>
      <h1>Hello from react</h1>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/overview">Overview</NavLink></li>
          <li><NavLink to="/inbox">Inbox</NavLink></li>
          <li><NavLink to="/listings">Listings</NavLink></li>
        </ul>
      </nav>

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Dashboard} />
        <Route exact path="/inbox" component={Dashboard} />
        <Route exact path="/listings" component={Dashboard} />

        <Iframe src="//localhost:8000" />
      </main>
    </div>
  </Router>
}

export default observer(App);
