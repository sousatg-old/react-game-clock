import React, { Component } from 'react';
import Timer from './Timer';
import './Clock.css';

interface ClockState {
    playerOne: boolean;
    playerTwo: boolean;
}

class Clock extends Component<any, ClockState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            playerOne: false,
            playerTwo: false,
        }
    }

    handlePlayerOneClick() {
        this.setState({
            playerOne: false,
            playerTwo: true,
        });
    }

    handlePlayerTwoClick() {
        this.setState({
            playerOne: true,
            playerTwo: false,
        });
    }

    handleTimersReset() {
        this.setState({playerOne: false, playerTwo: false});   
    }

    render() {
        return (
            <div className="clock">
                <Timer on={this.state.playerOne} handleClick={this.handlePlayerOneClick.bind(this)} />
                <button onClick={this.handleTimersReset.bind(this)}>Reset</button>
                <Timer on={this.state.playerTwo} handleClick={this.handlePlayerTwoClick.bind(this)} />
            </div>
        );
    }
}


export default Clock;
