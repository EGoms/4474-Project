import React from 'react';
import Options from './Options';
import Help from './Help.js';
import GameFunctions from './GameFunctions';
import playAgain from '../images/friend.png' //change this to play again img
import options from '../images/computer.png' //Change this to options img
import title from '../components/OpponentTitle'; //Change this to endGame Title
import helpButton from '../images/help.png';
import helpHighlighted from '../images/help-highlighted.png';
import back from '../images/back_arrow.png';
import audioOnButton from '../images/audio_on.png';
import audioOffButton from '../images/audio_off.png';
import audioOnHighlighted from '../images/audio-on-highlighted.png';
import audioOffHighlighted from '../images/audio-off-highlighted.png';
import difficultyButton from '../images/difficulty.png'
import difficultyHighlighted from '../images/difficulty-highlighted.png'
import newGameButton from '../images/new.png'


class EndGame extends React.Component {
// Pass this component the old game set up information. IE:
    //difficulty
    //size
    //players

    //Also include prop: winner={'NameOfWinner'}

    constructor(props) {
        super(props);
        this.state = {
          options: false,
          game: false,
          returnScreen: 'endGame',
          helpscreen: false,
          winner: props.winner,
          display: true,
          player: props.players,
          muted: 0,
          player1Score: props.player1Score,
          player2Score: props.player2Score
        };
        this.showHelp = this.showHelp.bind(this);
        this.muteAudio = this.muteAudio.bind(this);
        this.showOptionsCPU = this.showOptionsCPU.bind(this);
        this.showOptionsPVP = this.showOptionsPVP.bind(this);
        this.goBack = this.goBack.bind(this);
        this.showOptions = this.showOptions.bind(this);
    };

    showOptionsPVP() {
        console.log('Changing to Options PvP');
        if (this.state.player === 1) {
            var resp = window.confirm("You are currently playing vs a CPU. Switching to PvP will start a new score")
            if (!resp) {
                return;
            }
            this.setState({
                player: 2,
                player1Score: 0,
                player2Score: 0,
                options: true
            })
        } else {
            this.setState({
                player1Score: this.state.player1Score,
                player2Score: this.state.player2Score,
                options: true,
                player: 2
            })
        }
    }

    showOptionsCPU() {
        console.log('Changing to Options PvP');
        if (this.state.player === 2) {
            var resp = window.confirm("You are currently playing vs a friend. Switching to CPU will start a new score")
            if (!resp) {
                return;
            }
            this.setState({
                player1Score: 0,
                player2Score: 0,
                options: true,
                player: 1
            })
        } else {
            this.setState({
                player1Score: this.state.player1Score,
                player2Score: this.state.player2Score,
                options: true,
                player: 1
            })
        }
    }

    showOptions(){
        console.log('Changing to Options CPU');
        this.setState({
            options: true,
            opponent: false
        });
    }
      
    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            EndGame: false,
            helpScreen: true,
            });
    }

    highlightHelp(e) {
        e.target.src = helpHighlighted;
    }

    unhighlightHelp(e) {
        e.target.src = helpButton;
    }

    muteAudio(e) {
        if (e.target.src === audioOffButton || e.target.src === audioOffHighlighted) {
            e.target.src = audioOnButton
            this.state.muted = 0;
        } else {
            e.target.src = audioOffButton;
            this.state.muted = 1;
        }
    }

    highlightDifficulty(e) {
        e.target.src = difficultyHighlighted;
    }

    unhighlightDifficulty(e) {
        e.target.src = difficultyButton;
    }

    highlightAudio(e) {
        if (e.target.src === audioOnButton)
            e.target.src = audioOnHighlighted;
        if (e.target.src === audioOffButton)
            e.target.src = audioOffHighlighted;
    }

    unhighlightAudio(e) {
        if (e.target.src === audioOnHighlighted)
            e.target.src = audioOnButton;
        if (e.target.src === audioOffHighlighted)
            e.target.src = audioOffButton;
    }

    goBack(){
        this.setState({
            goBack: true,
            display: false
        })
    }

    render() {
        const myStyle = {
            display: 'inline-grid',
            backgroundColor: '#2196F3',
            marginLeft: '10%',
            marginTop: '5%',
            //transform: 'translateX(-50%)',
            height: '80vh',
            width: '80vw',
            position: 'absolute',
            justifyContent: 'stretch',
            border: '5px solid black',
            borderRadius: '10px'
        };

        const title = {
            fontSize: '40px' ,
            textAlign: 'center',
            gridColumnStart: '1',
            gridColumnEnd: '2',
            padding: '0px',
            margin: '0px',
        }
        
        const backButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            left: '1%'
        } 

        const optionsButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            left: '1%'
        } 

        const cpuButtonStyle = {
            width: '30%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'
        };

        const playerButtonStyle = {
            width: '30%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        };
        
        const playAgainPlayerButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '20%',
            height: 'auto',
            top: '35%',
            left: '40%'
        }

        const playAgainCPUButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '20%',
            height: 'auto',
            top: '65%',
            left: '40%'
        } 

        const helpButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '5%',
            height: 'auto', 
            bottom: '2.6%',
            right: '1.3%'
        }

        const difficultyButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto', 
            bottom: '2.6%',
            left: '1.3%'
        }

        const newGameButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '5%',
            height: 'auto', 
            bottom: '2.6%',
            right: '1.3%'
        }

        const audioButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            top: '2%',
            right: '1.3%'
        }

        if (this.state.helpScreen){
            return <Help returnScreen={'endGame'} players={this.state.player} player1Score={this.state.player1Score} player2Score={this.state.player2Score} winner={this.state.winner}/>
        }
        if (this.state.options)
        {
            return <Options players={this.state.player} player1Score={this.state.player1Score} player2Score={this.state.player2Score}/>
        }
        else if (this.state.game){
            return <GameFunctions difficulty={this.props.selectedDifficulty} n={this.props.size} players={this.props.players}/>
        }
        else
        {
            return (
                <div>
                    <div style={myStyle}>
                        <div style={title}>
                            {this.state.winner == "Draw" ? (<b>Game is a Draw</b>) : (<b>Winner is {this.state.winner}!</b>)}<br/><br/>
                            <small><b>Current Score <br/></b></small>
                            {this.state.player == 1 ? (<small>Player 1 - CPU</small>) : (<small>Player 1 - Player 2</small>)} <br/>
                            <small>{this.state.player1Score} - {this.state.player2Score}</small>
                        </div>

                        {/* Need to add images here for playAgain button and options button */}
                        <input onClick={this.showOptionsPVP} style={playerButtonStyle} type="image" src={playAgain}  name="playerpbutton"/>
                        <input onClick={this.showOptionsCPU} style={cpuButtonStyle} type="image" src={options} name="cpupbutton"/>
                    </div>
                    {/* <input onClick={(e) => this.muteAudio(e)} onMouseEnter={(e) => this.highlightAudio(e)} onMouseLeave={(e) => this.unhighlightAudio(e)} */}
                        {/* style={audioButtonStyle} type="image" src={audioOnButton} name="audioButton"/> */}
                    <input style={helpButtonStyle} onClick={this.showHelp} onMouseEnter={(e) => this.highlightHelp(e)} onMouseLeave={(e) => this.unhighlightHelp(e)}  type="image" src={helpButton} name="helpbutton"/>
                    <input onClick={this.showOptions} onMouseEnter={(e) => this.highlightDifficulty(e)} onMouseLeave={(e) => this.unhighlightDifficulty(e)}
                        style={difficultyButtonStyle} type="image" src={difficultyButton} name="difficultyButton"/>
                    {/* <input onClick={() => this.newGame()} style={newGameButtonStyle} type="image" src={newGameButton} name="newGameButton"/> */}
                </div>
            );
        }
    };
}


export default EndGame;