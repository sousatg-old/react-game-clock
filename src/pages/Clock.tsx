import React, { FC, useState, useEffect } from 'react';

import { useSettingsState } from '../context/SettingsContext';
import Timer from '../components/Timer';
import Options from '../components/Options';
import styled from 'styled-components';

const Clock = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px auto;
    grid-template-areas: 
        "a a a a"
        ". b b .";

    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 50px 1fr;
        grid-template-areas: 
            "b"
            "a"
            "c";

        & > .timer:first-child {
            transform: rotate(180deg);
        }
    }
`



const Home: FC = () => {
    const {time} = useSettingsState();

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
        newState.playerOne.time = time;

        newState.playerTwo.on = false;
        newState.playerTwo.time = time;

        setState({...newState});
    }

    return (
        <div>
            <Clock>
                <Timer className="timer--playerone" seconds={state.playerOne.time} on={state.playerOne.on} onClick={handlePlayerOneClick} />
                <Options pause={state.pause} handlePlayClick={onPlayClick} handleResetClick={onResetClick} />
                <Timer seconds={state.playerTwo.time} on={state.playerTwo.on} onClick={handlePlayerTwoClick} />
            </Clock>
        </div>
    );
}

export default Home;
