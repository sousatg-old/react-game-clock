import React, { FC, useState } from 'react';
import Timer from '../Timer/Timer';
import './Clock.css';

let cenas = 1;

const Clock = () => {

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

    const [state, setState] = useState(initialState);
    
    const handlePlayerOneClick = () => {
        console.log(state);
        const newState = state;
        newState.playerOne.on = false;
        newState.playerTwo.on = true;
        setState(newState);
    }
    
    const handlePlayerTwoClick = () => {
        console.log(state);
        const newState = state;
        newState.playerOne.on = true;
        newState.playerTwo.on = false;
        setState(newState);
    }
    
    const handleTimersReset = () => {
        console.log(state);
        setState(initialState);
    }

    const updateButton = () => {
        cenas = 2;
        console.log(cenas);
    }

    const style = {
        background: 'red',
    }

    return <div className="clock">
            <button onClick={updateButton}>Carrega - {cenas}</button>
            <Timer className="timer--playerone" seconds={state.playerOne.time} on={state.playerOne.on} onClick={handlePlayerOneClick} />
            <button onClick={handleTimersReset}>Reset</button>
            <Timer seconds={state.playerTwo.time} on={state.playerTwo.on} onClick={handlePlayerTwoClick} />
        </div>;
}

export default Clock;
