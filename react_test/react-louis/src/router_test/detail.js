import React from 'react';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render () {
        return (
            <div>
                <a href="#/">回到 home</a>
            </div>
        );
    }
}
