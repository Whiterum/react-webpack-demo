import React, { Component, PropTypes } from 'react';
import Demo01 from './react-demo-01';
import Time from './Time';
import TimeWithoutState from './TimeWithoutState';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
let actions = {
    type: 'SET'
}

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '张三',
                age: 19,
                location: '红旗路'
            },
            time: new Date()
        }
    }
    toggle() {
        if (this.state.user.name == '张三') {
            this.setState({
                user: {
                    name: '李四',
                    age: 34,
                    location: '朝阳路'
                }
            })
        } else {
            this.setState({
                user: {
                    name: '张三',
                    age: 19,
                    location: '红旗路'
                }
            })
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
                <Demo01 user={this.state.user} />
                <button onClick={this.toggle.bind(this)}>切换</button>
                <p>-----------------------------------------------------------------------</p>
                <Time />
                <p>无状态Time组件</p>
                <TimeWithoutState time={this.state.time} />
                <p>-----------------------------------------------------------------------</p>

            </div>
        );
    }

};

function mapStateToProps(state) {
    console.log(state)
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        ACTIONS:bindActionCreators(actions,dispatch)
    };
}

export default  connect(mapStateToProps,mapDispatchToProps)(Demo);
