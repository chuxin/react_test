// import './bak/App.css';
import React from 'react';
// import Router from "./router_test/Router";
import {HashRouter, Route, Link, BrowserRouter} from "react-router-dom";
import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>你好啊</h3>
                {/*<Router></Router>*/}
                <BrowserRouter>
                    <ul>
                        <li><Link to="/Main">Main</Link></li>
                        <li><Link to="/Topics">Topics</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                    <hr />

                </BrowserRouter>
            </div>
        );
    }
}

export default App;
