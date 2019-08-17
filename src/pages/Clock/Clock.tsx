import React, { FC, useState, useEffect } from 'react';

import { useAppState } from '../../context/AppContext';
import Timer from '../../components/Timer/Timer';
import Options from '../../components/Options/Options';

import './Clock.css';



const Home: FC = () => {
    const {time} = useAppState();

    const initialState = {
        pause: true,
        playerOne: {
            on: true,
            time: time
        },
        playerTwo: {
            on: false,
            time: time
        }
    }

    let [state, setState] = useState(initialState);

    useEffect(() =>{
        const interval = setInterval(() => {
            if(state.pause) {
                return;
            }

            if(state.playerOne.time === 0 || state.playerTwo.time === 0) {
                return ;
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

    const onPlayClick = () => {
        let newState = state;
        newState.pause = !newState.pause;
        setState({...newState});
    }

    const onResetClick = () => {
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
                <Options pause={state.pause} handlePlayClick={onPlayClick} handleResetClick={onResetClick} />
                <Timer seconds={state.playerTwo.time} on={state.playerTwo.on} onClick={handlePlayerTwoClick} />
            </div>
        </div>
    );
}

export default Home;
