import React, { Component, PropTypes } from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;
