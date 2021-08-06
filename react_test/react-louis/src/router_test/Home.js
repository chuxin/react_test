import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import MatchProps from "./MatchProps";

export default class Home extends React.Component {
    render () {
        console.log(this.props.children);
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/Home">Home</Link><br /><br />
                        <Link to="/Topic">Topic</Link><br /><br />
                        <Link to="/About">About</Link><br /><br />
                    </div>
                    <div>
                        {/*Route有三种render方式 之 children方式*/}
                        {this.props.children}
                    </div>
                </BrowserRouter>
                <div>
                    <br /><br /><br />
                    <Link to="/MatchProps">MatchProps</Link><br /><br />
                    {/*Route有三种render方式 之 component方式*/}
                    <Route path="/MatchProps" component={MatchProps} />
                </div>
            </div>
        );
    }
}
