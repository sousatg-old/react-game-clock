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
