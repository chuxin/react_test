import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <a href="#/details">去 details</a>
                {/*<button onClick={() => this.props.history.push("detail")}>通过函数跳转</button>*/}
            </div>
        );
    }
}
