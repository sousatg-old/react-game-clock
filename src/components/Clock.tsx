import React, { Component, useState, useEffect } from 'react';
import Timer from './Timer';
import './Clock.css';
import Menu from './Menu';

interface ClockState {
    playerOne: boolean;
    playerTwo: boolean;
    playerOneTime: number;
    playerTwoTime: number;
    menuOpened: boolean;
}

const Clock = () => {

    const initialState = {
        playerOne: false,
        playerTwo: false,
        playerOneTime: 600,
        playerTwoTime: 600,
        menuOpened: false,
    }

    const [state, setState] = useState(initialState);

    useEffect(() =>{
        const interval = setInterval(() => {
            if(state.playerOne) {
                setState({...state, playerOneTime: state.playerOneTime - 1});
                return;
            }
            if(state.playerTwo) {
                console.log(2);
                setState({...state, playerTwoTime: state.playerTwoTime - 1});
                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    const handlePlayerOneClick = () => {
        setState({
            ...state,
            playerOne: false,
            playerTwo: true,
        });
    }

    const handlePlayerTwoClick = () => {
        setState({
            ...state,
            playerOne: true,
            playerTwo: false,
        });
    }

    const handleTimersReset = () => {
        setState(initialState);
    }

    const toggleMenu = () => {
        const isOpened = state.menuOpened ? false : true;

        setState({...state, menuOpened: isOpened})
    }

    return (
        <div>
            <Menu on={state.menuOpened} />
            <div className="clock">
                <Timer className="timer--playerone" seconds={state.playerOneTime} on={state.playerOne} onClick={handlePlayerOneClick} />
                <button onClick={toggleMenu}>Menu</button>
                <button onClick={handleTimersReset}>Reset</button>
                <Timer seconds={state.playerTwoTime} on={state.playerTwo} onClick={handlePlayerTwoClick} />
            </div>
        </div>
    );
}

export default Clock;
