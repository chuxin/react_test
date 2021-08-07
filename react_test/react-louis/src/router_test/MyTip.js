import React, { PureComponent } from "react";
import {Prompt} from "react-router-dom";

export default class MyTip extends PureComponent {
    render() {
        return (
            <h3>
                我是MyTip页
                <Prompt when={true} message={ location => (
                    `我是来搞笑的, 你即将去 ${location.pathname}`
                )}></Prompt>
            </h3>
        );
    }
}