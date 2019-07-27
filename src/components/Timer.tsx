import React, {Component, SFC} from 'react';
import './Timer.css';
import moment from 'moment';

interface TimerProps {
    on: boolean;
    seconds: number;
    onClick: any;
}

const Timer: SFC<TimerProps> = ({on, seconds, onClick}) => {
    const timerClass = on ? 'timer--active' : 'timer--inactive';
    const timerClassNames = `timer ${timerClass}`;

    return (
        <div className={timerClassNames} onClick={onClick}>
            {moment.utc(seconds * 1000).format('mm:ss')}
        </div>
    )
}

export default Timer;

/*
export default class Timer extends Component<TimerProps, TimerState> {
    constructor(props: any) {
        super(props);
    }

    onClick() {
        this.props.onClick();
    }

    render() {
        const timerClass = this.props.on ? 'timer--active' : 'timer--inactive';
        const timerClassNames = `timer ${timerClass}`;

        const seconds = this.props.seconds;

        return (
            <div className={timerClassNames} onClick={this.onClick.bind(this)}>
                {moment.utc(seconds * 1000).format('mm:ss')}
            </div>
        );
    }
}
*/