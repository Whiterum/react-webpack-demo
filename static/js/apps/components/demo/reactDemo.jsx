import React, { Component, PropTypes } from 'react';
import Demo01 from './react-demo-01';
import Time from './Time';
import TimeWithoutState from './TimeWithoutState';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStatus, change } from '../../redux/actions/index'

let actions = {
    type: 'SET_STATUS'
}

class Demo extends Component {
    // state = {
    //     user: {
    //         name: '张三',
    //         age: 19,
    //         location: '红旗路'
    //     },
    //     time: new Date(),
    //     input: ''
    // }
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '张三',
                age: 19,
                location: '红旗路'
            },
            time: new Date(),
            input: ''
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

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    render() {
        const { dispatch } = this.props
        return (
            <div>
                <Demo01 user={this.state.user} />
                <button onClick={this.toggle.bind(this)}>切换</button>
                <p>-----------------------------------------------------------------------</p>
                <Time />
                <p>无状态Time组件</p>
                <TimeWithoutState time={this.state.time} />
                <p>-----------------------------------------------------------------------</p>
                <p>name in Store is :{this.props.name} ||==============||  status is Store is :{this.props.status.toString()}</p>
                <button onClick={() => {this.props.changeStatus()}}>changeStatus</button>
                <br />
                <br />
                <br />
                <br />
                <input type="text" placeholder="请输入内容" value={this.state.input} onChange={(e) => {
                    this.handleChange(e)
                }} />
                <button onClick={() => {this.props.changeName(this.state.input)}}>changeName</button>
            </div>
        );
    }

};

function mapStateToProps(state) {
    let { user, isSet } = state['test']
    return {status: isSet, name: user.name};
}

function mapDispatchToProps(dispatch) {
    return {
        changeName: bindActionCreators(change, dispatch),
        changeStatus: bindActionCreators(setStatus, dispatch),
    };
}

export default  connect(mapStateToProps,mapDispatchToProps)(Demo);
