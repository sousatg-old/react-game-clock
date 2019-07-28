import React, { Component } from 'react';
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

class Clock extends Component<any, ClockState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            playerOne: false,
            playerTwo: false,
            playerOneTime: 600,
            playerTwoTime: 600,
            menuOpened: false,
        }
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.playerOne) {
                this.setState({...this.state, playerOneTime: this.state.playerOneTime - 1});
            }
        }, 1000);

        setInterval(() => {
            if(this.state.playerTwo) {
                this.setState({...this.state, playerTwoTime: this.state.playerTwoTime - 1});
            }
        }, 1000);
    }

    handlePlayerOneClick() {
        this.setState({
            ...this.state,
            playerOne: false,
            playerTwo: true,
        });
    }

    handlePlayerTwoClick() {
        this.setState({
            ...this.state,
            playerOne: true,
            playerTwo: false,
        });
    }

    handleTimersReset() {
        this.setState({
            playerOne: false,
            playerTwo: false,
            playerOneTime: 600,
            playerTwoTime: 600,
        });
    }

    toggleMenu() {
        const isOpened = this.state.menuOpened ? false : true;

        this.setState({...this.state, menuOpened: isOpened})
    }

    render() {
        return (
            <div>
                <Menu on={this.state.menuOpened} />
                <div className="clock">
                    <Timer className="timer--playerone" seconds={this.state.playerOneTime} on={this.state.playerOne} onClick={this.handlePlayerOneClick.bind(this)} />
                    <button onClick={this.toggleMenu.bind(this)}>Menu</button>
                    <button onClick={this.handleTimersReset.bind(this)}>Reset</button>
                    <Timer seconds={this.state.playerTwoTime} on={this.state.playerTwo} onClick={this.handlePlayerTwoClick.bind(this)} />
                </div>
            </div>

        );
    }
}


export default Clock;
