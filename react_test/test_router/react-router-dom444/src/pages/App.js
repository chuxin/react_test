/**
 * created by kuku on 2018-06-22 
 */
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class OldSchoolMenuLink extends Component{
  render() {
    return (
      <Route children={(props) => {
        return (
          <li>
            {this.props.match ? '>' : ''}
            <Link to={this.props.path}>{this.props.label}</Link>
          </li>
        )
      }} />
    )
  }
}

class App extends Component{
  render() {
    return(
      <Router>
        <div>
          <ul>
            <OldSchoolMenuLink path="home" label="/Home"/>
            <OldSchoolMenuLink path="about" label="/About"/>
          </ul>
          <hr />
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component{
  render() {
    return(
      <div>
        Home
      </div>
    )
  }
}

class About extends Component{
  render() {
    return(
      <div>
        About
      </div>
    )
  }
}
export default App;