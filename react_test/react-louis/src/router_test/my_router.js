import React from 'react';
import {Route, Link, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Topic from "./Topic";
import About from "./About";
import NoMatch from "./NoMatch";
import Children from "./Children";
import ParamsLala from "./ParamsLala";

export default class BasicRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Home>
                    <Switch>
                        <Route path="/home" render={
                            () => (
                                <div>
                                    Home <Link to="/home/children">children</Link>
                                    <Route path="/home/children" component={Children} />
                                </div>
                            )
                        } />
                        <Route path="/Topic" component={Topic} />
                        <Route path="/About" component={About} />
                        <Redirect path="/" to="/home" exact />
                        <Route path="/TestParam/:id" component={ParamsLala} />
                        <Route component={NoMatch} />
                    </Switch>
                </Home>
                {/*<Switch>*/}
                {/*    <Route exact path="/" component={Home} />*/}
                {/*    <Route exact path="/details" component={Details} />*/}
                {/*</Switch>*/}
            </BrowserRouter>
        );
    }
};
