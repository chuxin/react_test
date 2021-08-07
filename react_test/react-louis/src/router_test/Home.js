import React, {PureComponent} from 'react';
import {BrowserRouter, Link, Switch, Route, Redirect} from "react-router-dom";
import MatchProps from "./MatchProps";
import About from "./About";
import AuthButton from "./AuthButton";
import Topic from "./Topic";
import MyTip from "./MyTip";
import ParamsLala from "./ParamsLala";
import NoMatch from "./NoMatch";
import "./css/my.css"

const Persons = [
    {id: 0, name: 'AAA', friends: [0, 1, 2, 3, 4]},
    {id: 1, name: 'BBB', friends: [1, 2]},
    {id: 2, name: 'CCC', friends: [0, 4]},
    {id: 3, name: 'DDD', friends: [0, 1, 3]},
    {id: 4, name: 'EEE', friends: [1, 2, 3, 4]}
];
const findFunc = (id) => {
    return Persons.find( piece => {
        return piece.id == id;
    });
};

var myStyle = {
    fontSize: 20,
    color: '#ff0000'
}
const myRoutes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>展示首页</div>,         // 很神奇，一个箭头函数就能代表一个组件
        main: () => <h3>展示首页！！</h3>
    },
    {
        path: "/ttt/:my_user",
        sidebar: ({match}) => <div>{match.params.my_user}</div>,  // 为什么这里的参数是 {match}，而不是 match ？？？ 好像是因为不在标签属性里，而在内容块里
        main: ({match}) => <div>{match.params.my_user} ！！！</div>
    },
    {
        path: "/blue-xxxx",
        sidebar: () => <div>蓝色xxxx</div>,
        main: () => <h3>蓝色xxxx！！</h3>
    },
    {
        path: "/yellow-yyyy",
        sidebar: () => <div>黄色yyyy</div>,
        main: () => <h3>黄色yyyy！！</h3>
    },
];

const RecursionRouters = (route) => {
    return (
        <Route path={route.path} render={ (props) => {
            console.log(props);
            // {
            //     history: Object { length: 50, action: "PUSH", location: {…}, … }
            //     location: Object { pathname: "/test222", search: "", key: "ml61ow", … }
            //     match: Object { path: "/test222", url: "/test222", isExact: true, … }
            //     staticContext: undefined
            // }
            // {...props}  这个貌似可以去掉，没什么用  ？？？
            return <route.component routes={route.routes} {...props} />
        }}></Route>
    );
};
const test111 = () => (<h3>test111</h3>);
const test222 = ({routes}) => (
    <div>
        <h3>test222</h3>
        <li><Link to="/test222/bus">Bus</Link></li>
        <li><Link to="/test222/car">Car</Link></li>
        {
            routes.map((route, i) => (
                <RecursionRouters key={i} {...route} />
            ))
        }
    </div>
);
const bus = () => <h3>bus</h3>;
const car = () => <h3>car</h3>;
const routes = [
    {
        path: "/test111",
        component: test111
    },
    {
        path: "/test222",
        component: test222,
        routes: [
            {
                path: '/test222/bus',
                component: bus
            },
            {
                path: '/test222/car',
                component: car
            }
        ]
    },
];
class Home extends React.Component {
    constructor() {
        super();
        this.state = {isLogin: false};
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({isLogin: sessionStorage.getItem("isLogin") === "true" ? true : false});
        // }, 200);
    }

    render () {
        // console.log(this.props.children);

        return (
            <div>
                <BrowserRouter>
                    <div>
                        ================  Route之Switch操作  &&  路由基本操作   ================
                        <br /><br />
                        <Link to="/Home">Home</Link><br /><br />
                        <Link to="/Topic">Topic</Link><br /><br />
                        <Link to="/About">About</Link><br /><br />
                    </div>

                    {/* Route之Switch 写法① */}
                    <div>
                        {this.props.children}
                    </div>

                    {/* Route之Switch 写法② */}
                    {/*<div>*/}
                        {/*<Switch>*/}
                            {/*<Route path="/Topic" component={Topic} />*/}
                            {/*<Route path="/About" component={About} />*/}
                            {/*<Redirect path="/" to="/Topic" exact />*/}
                            {/*<Route path="/TestParam/:id" component={ParamsLala} />*/}
                            {/*<Route component={NoMatch} />*/}
                        {/*</Switch>*/}
                    {/*</div>*/}
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
                    <AuthButton isLogin={this.state.isLogin}></AuthButton>
                    <li>
                        <Link to="/About">公共页面，无需登录</Link><br />
                        <Link to="/private33">私有页面，需登录</Link>
                    </li>
                    <Route path="/About" component={About}></Route>
                    <PrivateRoute myPath="/private33" isLogin={this.state.isLogin} ></PrivateRoute>
                </div>
                <div>
                    <br />=================  Route组件的三大render methods（render、component、children）之一children   ============================
                    <br /><br />
                    <BrowserRouter>
                        <ul>
                            <MyChildrenRender path="About" label="/About"></MyChildrenRender>
                            <MyChildrenRender path="Topic" label="/Topic"></MyChildrenRender>
                        </ul>
                        <Route path="/About" component={About} />
                        <Route path="/Topic" component={Topic} />
                    </BrowserRouter>
                </div>
                <div>
                    <br />=================  点击弹窗, 用到了Route的location  ============================
                    <br /><br />
                    第一次点击的时候没有弹窗，不知道为什么？？？<br />
                    <Link to="/MyTip">MyTip</Link>
                    <Route path="/MyTip" component={MyTip}></Route>
                </div>
                <div>
                    <br />=================  菜单递归  ============================
                    <br /><br />
                    <BrowserRouter>
                        <MyPersons match={{params: {id: 0}, url: '/Home'}}></MyPersons>
                    </BrowserRouter>
                </div>
                <div>
                    <br />=================  react 三种添加样式的方式  &&  一个链接控制两个component展示  ============================
                    <br /><br />
                    ① 第一种 利用 className,相当于css中的class <br />
                    <button className="aaa">第一种</button><br /><br />
                    ② 第二种 定一个样式对象
                    <button style={myStyle}>第二种</button><br /><br />
                    ③ 第三种 直接写在元素上
                    <button style={{color: "blue"}}>第三种</button><br /><br /><br /><br />

                    <div style={{display: "flex"}}>
                        <div style={{width: "200px", border: "1px solid black", padding: "10px"}}>
                            {
                                myRoutes.map( (item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.path}>{item.path}</Link>
                                        </li>
                                    );
                                })
                            }
                            <br />
                            {
                                myRoutes.map((item, index) => {
                                    return (
                                        <Route key={index} path={item.path} component={item.sidebar} exact={item.exact} />
                                    );
                                })
                            }
                        </div>
                        <div style={{flex: 1}}>
                            {
                                myRoutes.map((item, index) => {
                                    return (
                                        <Route key={index} path={item.path} component={item.main} exact={item.exact} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <br />=================  做一个路由配置  ============================
                    <br /><br />
                    <li><Link to="/test111">test111</Link></li>
                    <li><Link to="/test222">test222</Link></li>
                    {
                        routes.map((route, i) => (
                            <RecursionRouters key={i} {...route}></RecursionRouters>
                        ))
                    }
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
    render() {
        if (this.props.isLogin === true) {
            return (
                <Route path={this.props.myPath} component={Private22}></Route>
            );
        } else {
            return (
                <div>这里要是用重定向，下面的一些例子，效果就展示得有问题了</div>
            );
            {/*<Redirect from={this.props.myPath} to="/Home" />*/}
        }
    }
}

class Private22 extends PureComponent {
    render() {
        return (
            <div>我是隐私页 private</div>
        );
    }
}

class MyChildrenRender extends React.Component {
    render () {
        return (
            <Route children={() => {
                return (
                    <li>
                        <Link to={this.props.path}>{this.props.label}</Link>
                    </li>
                );
            }} />
        );
    }
}

class MyPersons extends React.Component {

    render() {
        var piece = findFunc(this.props.match.params.id);
        return (
            <div>
                <h3>{piece.name}</h3>
                <ul>
                    {
                        piece.friends.map((value) => {
                            return (
                                <li key={value}>
                                    <Link to={`${this.props.match.url}/${value}`}>{findFunc(value).name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <Route path={`${this.props.match.url}/:id`} component={MyPersons}></Route>
            </div>
        );
    }
}