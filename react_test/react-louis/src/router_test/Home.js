import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

export default class Home extends React.Component {
    render () {
        console.log(this.props.children);
        return (
            <BrowserRouter>
                <div>
                    <Link to="/home">Home</Link><br /><br />
                    <Link to="/Topic">Topic</Link><br /><br />
                    <Link to="/About">About</Link><br /><br />
                </div>
                <div>
                    {this.props.children}
                </div>
            </BrowserRouter>
        );
    }
}
