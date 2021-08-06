import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import MatchProps from "./MatchProps";
import About from "./About";

class Home extends React.Component {
    render () {
        console.log(this.props.children);
        return (
            <div>
                <BrowserRouter>
                    <div>
                        ================  Route三种render方式 之 children方式  &&  路由基本操作   ================
                        <br /><br />
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
                    <br />===============  Route三种render方式 之 component方式，render方式  &&  路由传参  =================
                    <br /><br />
                    <Link to="/MatchProps">MatchProps</Link><br /><br />
                    {/*Route有三种render方式 之 component方式*/}
                    <Route path="/MatchProps" component={MatchProps} />
                </div>
                <div>
                    <br />=================  登录   ============================
                    <br /><br />
                    <AuthButton></AuthButton>
                    <li>
                        <Link to="/About">公共页面，无需登录</Link>
                        <Link to="/private">私有页面，需登录</Link>
                    </li>
                    <Route path="/About" component={About}></Route>
                    <PrivateRoute path="/private" isLogin={} ></PrivateRoute>
                </div>
                <div>
                    <br />=================  先放着   ============================
                    <br /><br />
                    <form>
                        用户名：<input type="text" name="" />
                        密码：<input type="password" name="passwd"  />
                        {/*<button onClick={}></button>*/}
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;

class PrivateRoute extends React.Component {
    https://blog.csdn.net/weixin_37242696/article/details/80821477
}