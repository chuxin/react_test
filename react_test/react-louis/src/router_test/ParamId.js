import React, { PureComponent } from "react";

export default class ParamId extends PureComponent {
    render() {
        return (
            <div>ParamId: {this.props.match.params.paramsXXX}</div>
        );
    }
}