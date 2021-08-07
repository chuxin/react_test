/**
 * created by kuku on 2018-06-23
 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>shoelaces</h2>
  }
]

class App extends Component{
  render() {
    return(
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px', backgroundColor: '#cccccc' }}>
            <ul style={{listStyleType: 'none',padding: 0}}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/bubblegum'>Bubblegum</Link></li>
              <li><Link to='/shoelaces'>Shoelaces</Link></li>
            </ul>
            {
              routes.map((item, index) => {
                return (
                  <Route path={item.path} key={index} exact={item.exact} component={item.sidebar} />
                )
              })
            }
          </div>
          <div style={{ flex: 1 }}>
            {
              routes.map((item, index) => {
                return (
                  <Route path={item.path} key={index} exact={item.exact} component={item.main} />
                )
              })
            }
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
