import React, { PureComponent } from "react";
import {Route, Link, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ParamId from "./ParamId";

export default class MatchProps extends PureComponent {
    render() {
        return (
            <div>
                <li>
                    <Link to={this.props.match.url}></Link>
                    this.props.match.url 的值为：{`${this.props.match.url}`}
                </li>
                <li>
                    <Link to={`${this.props.match.url}/paramss111`}>我是参数一一</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/paramss222`}>我是参数二二</Link>
                </li>

                <Route path={`${this.props.match.url}/:paramsXXX`} component={ParamId}></Route>
                {/*Route有三种render方式 之 render方式*/}
                <Route exact path={`${this.props.match.url}`} render={() => (
                    <h3>请选择一个主题</h3>
                )} ></Route>
            </div>
        );
    }
}