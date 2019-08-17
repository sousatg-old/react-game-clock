import React, {SFC} from 'react';
import './Timer.css';
import moment from 'moment';

interface TimerProps {
    on: boolean;
    seconds: number;
    onClick: any;
    className?: string;
}

const Timer: SFC<TimerProps> = ({on, seconds, onClick, className}) => {
    const timerClass = on ? 'timer--active' : 'timer--inactive';
    const timerClassNames = `timer ${className} ${timerClass}`;

    return (
        <div className={timerClassNames} onClick={onClick}>
            <div>{moment.utc(seconds * 1000).format('mm:ss')}</div>

        </div>
    );
}

export default Timer;
