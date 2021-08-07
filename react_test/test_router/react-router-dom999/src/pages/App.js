import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import '../styles/App.css';

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({match}) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/Kim">Kim</Link>
            </li>
            <li>
              <Link to="/chris">chris</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/company" component={Company}/>
            <Route path="/:user" component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
