import React, { PureComponent } from "react";

export default class ParamsLala extends PureComponent {
    render() {
        return (
            <div>params_lala 33{this.props.match.params.id}</div>
        );
    }
}