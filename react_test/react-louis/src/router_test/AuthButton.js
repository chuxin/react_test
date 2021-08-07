import React, {PureComponent} from "react";

export default class AuthButton extends PureComponent {
    LoginOutEvent() {
        sessionStorage.setItem("isLogin", false);
    }

    LoginInEvent() {
        sessionStorage.setItem("isLogin", true);
    }

    render () {
        return (
            <div>
                {this.props.isLogin === true
                    ? <span>欢迎您， <button onClick={this.LoginOutEvent}>login out</button></span>
                    : <span>你还没有登录， <button onClick={this.LoginInEvent}>login in</button></span>}
            </div>
        );
    }
}

