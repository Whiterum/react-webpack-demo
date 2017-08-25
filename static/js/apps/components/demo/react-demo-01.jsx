import React, { Component, PropTypes } from 'react';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 19
        }
    }
    render() {
        return (
            <div>
                <p> 姓名:{this.props.user.name}</p>
                <p> 年龄:{this.props.user.age}</p>
                <p> 住址:{this.props.user.location}</p>
            </div>
        );
    }
}

export default Demo;
