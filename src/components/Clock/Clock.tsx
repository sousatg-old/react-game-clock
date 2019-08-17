import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.css';
import {ReactComponent as Reload} from '../../icons/reload.svg';
import {ReactComponent as Play} from '../../icons/next.svg';

const initialState = {
    playerOne: {
        on: false,
        time: 600
    },
    playerTwo: {
        on: false,
        time: 600
    }
}

const Clock = () => {

    let [state, setState] = useState(initialState);

    useEffect(() =>{
        const interval = setInterval(() => {
            if(state.playerOne.on) {
                let newState = state
                newState.playerOne.time -= 1;
                setState({...newState});

                return;
            }
            if(state.playerTwo.on) {
                let newState = state;
                newState.playerTwo.time -= 1;
                setState({...newState});

                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    const handlePlayerOneClick = () => {
        let newState = state;

        newState.playerOne.on = false;
        newState.playerTwo.on = true;

        setState({...newState});
    }

    const handlePlayerTwoClick = () => {
        let newState = state;

        newState.playerOne.on = true;
        newState.playerTwo.on = false;

        setState({...newState});
    }

    const handleTimersReset = () => {
        setState(initialState);
    }

    return (
        <div>
            <div className="clock">
                <Timer className="timer--playerone" seconds={state.playerOne.time} on={state.playerOne.on} onClick={handlePlayerOneClick} />
                <div className="options">
                    <button className="btn" onClick={handleTimersReset}>
                        <Play width="25" fill="white" />
                    </button>
                    <button className="btn" onClick={handleTimersReset}>
                        <Reload width="25" fill="white" />
                    </button>
                </div>
                <Timer seconds={state.playerTwo.time} on={state.playerTwo.on} onClick={handlePlayerTwoClick} />
            </div>
        </div>
    );
}

export default Clock;
