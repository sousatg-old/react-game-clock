import React, {Component} from 'react';
import './Timer.css';
import moment from 'moment';

interface TimerProps {
    on: boolean;
    handleClick: any;
}

interface TimerState {
    time: number;
}

export default class Timer extends Component<TimerProps, TimerState> {
    constructor(props: any) {
        super(props);

        this.state = {
            time: 10000
        }
    }

    onClick() {
        this.props.handleClick();
    }

    componentDidMount() {
        setInterval(() => {
            if(this.props.on) {
                this.setState({...this.state, time: this.state.time - 1});
            }
        }, 1000);
    }

    render() {
        const timerClass = this.props.on ? 'timer--active' : 'timer--inactive';
        const timerClassNames = `timer ${timerClass}`;

        const seconds = this.state.time;

        return (
            <div className={timerClassNames} onClick={this.onClick.bind(this)}>
                {moment().seconds(seconds).format('mm:ss')}
            </div>
        );
    }
}
