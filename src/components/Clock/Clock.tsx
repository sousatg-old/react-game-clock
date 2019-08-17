import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.css';
import {ReactComponent as Reload} from '../../icons/reload.svg';
import {ReactComponent as Play} from '../../icons/next.svg';
import {ReactComponent as Pause} from '../../icons/pause.svg';

var initialState = {
    pause: true,
    playerOne: {
        on: true,
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
            if(state.pause) {
                return;
            }

            let newState = state;

            if(state.playerOne.on) {
                newState.playerOne.time -= 1;
            } else {
                newState.playerTwo.time -= 1;
            }

            setState({...newState});

            return;
        }, 1000);

        return () => clearInterval(interval);
    });

    const handlePlayerOneClick = () => {
        let newState = state;

        if(!state.playerOne.on) return;

        newState.pause = false;
        newState.playerOne.on = false;
        newState.playerTwo.on = true;

        setState({...newState});
    }

    const handlePlayerTwoClick = () => {
        let newState = state;

        if(!state.playerTwo.on) return;

        newState.pause = false;
        newState.playerOne.on = true;
        newState.playerTwo.on = false;

        setState({...newState});
    }

    const handlePlayClick = () => {
        let newState = state;
        newState.pause = !newState.pause;
        setState({...newState});
    }

    const handleTimersReset = () => {
        let newState = state;

        newState.pause = true;
        newState.playerOne.on = true;
        newState.playerOne.time = 600;

        newState.playerTwo.on = false;
        newState.playerTwo.time = 600;

        setState({...newState});
    }

    return (
        <div>
            <div className="clock">
                <Timer className="timer--playerone" seconds={state.playerOne.time} on={state.playerOne.on} onClick={handlePlayerOneClick} />
                <div className="options">
                    <button className="btn" onClick={handlePlayClick}>
                        {state.pause ? <Play width="25" fill="white" /> : <Pause width="25" fill="white" /> }
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
