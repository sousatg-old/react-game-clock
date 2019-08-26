import React, {SFC} from 'react';
import moment from 'moment';
import styled from 'styled-components';

interface TimerProps {
    on: boolean;
    seconds: number;
    onClick: any;
    className?: string;
}

const TimerStyle = styled.div<{active: boolean}>`
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;

    @media only screen and (max-width: 600px) {
        grid-column: span 1;
    }

    ${({active}) => active && `
        background-color: #d3d3d3;
    `}

    ${({active}) => !active && `
        background-color: darkorange;
        color: white;
    `}
`;

const Timer: SFC<TimerProps> = ({on, seconds, onClick, className}) => {
    const timerClass = on ? 'timer--active' : 'timer--inactive';
    const timerClassNames = `timer ${className} ${timerClass}`;

    return (
        <TimerStyle active={on} onClick={onClick}>
            <div>{moment.utc(seconds * 1000).format('mm:ss')}</div>
        </TimerStyle>
    );
}

export default Timer;
