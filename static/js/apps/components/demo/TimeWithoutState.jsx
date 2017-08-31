import React, { Component, PropTypes } from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <p>{this.props.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;
