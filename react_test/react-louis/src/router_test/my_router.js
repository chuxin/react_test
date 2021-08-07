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
                        <Route path="/Home" render={
                            () => (
                                <div>
                                    Home <Link to="/Home/children">children</Link>
                                    <Route path="/Home/children" component={Children} />
                                </div>
                            )
                        } />
                        <Route path="/Topic" component={Topic} />
                        <Route path="/About" component={About} />
                        <Redirect path="/" to="/Home" exact />
                        <Route path="/TestParam/:id" component={ParamsLala} />
                        {/*<Route component={NoMatch} />*/}
                    </Switch>

                </Home>

            </BrowserRouter>
        );
    }
};
