import React from 'react';
import {HashRouter, Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./home";
import Details from "./detail";

class BasicRoute extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/details" component={Details} />
                </Switch>
            </HashRouter>
        );
    }
};
export default BasicRoute;
