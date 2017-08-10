import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Iframe from './Iframe';
import mediator from './Mediator';
import history from './history';
import store from './store';

const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state)
  store.setActive(location.pathname);
});

function Link({ to, children }) {
  return <button onClick={() => store.navigate(to)}>{children}</button>
}

@observer
class App extends Component {
  render() {
    return <div>
      <h1>Hello from react</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
        </ul>
      </nav>

      <p>{store.active}</p>

      <main>
        <Iframe
          src="//localhost:3000"
          style={{
            width: '100%',
            height: '50vh'
          }}
          onLoad={mediator.init}
        />
      </main>
    </div>
  }
}

export default App;
