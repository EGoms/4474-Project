import React from 'react';
import HelpVid from './HelpVid';
import helpTitle from '../images/helpTitle.png'
import backButton from '../images/back_arrow.png'
import backHighlighted from '../images/back-arrow-highlighted.png';
import GameContainer from './GameContainer'
import GameFunctions from './GameFunctions'
import Opponent from './Opponent'
import Options from './Options'
import EndGame from './EndGame'

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGame: this.props.inGame,
            goBack: false,
            display: true,
            returnScreen: this.props.returnScreen,
            size: props.n**2,
            winner: props.winner,
            selectedDifficulty: props.difficulty,
            players: props.players,
            player1Score: props.player1Score,
            player2Score: props.player2Score
        };
        this.goBack = this.goBack.bind(this);
    };

    goBack(){
        this.setState({
            goBack: true,
            display: false
        })
    }

    highlightBack(e) {
        e.target.src = backHighlighted;
    }

    unhighlightBack(e) {
        e.target.src = backButton;
    }

    render(){ 
        const myStyle = {
            display: 'grid',
            gridTemplateColumns: '50% auto',
            gridTemplateRows: '25% auto',
            marginLeft: '10%',
            marginTop: '5%',
            position: 'absolute',
            border: '5px solid black',
            borderRadius: '10px',
            height: '80vh',
            width: '80vw',
            backgroundColor: '#2196F3',
            position: 'absolute'
        }

        const titleStyle = {
            display: 'block',
            gridColumnStart: '1',
            gridColumnEnd: '3',

        }

        const vidStyle = {
            gridColumnStart: '2',
            gridColumnEnd: '3',
            height: '80%',
            width: '100%',
            marginTop: '-7%'
        }

        const backImageStyle = {
            width: '50%'
        }

        const backButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '3%',
            height: 'auto',
            bottom: '2.6%',
            left: '1.3%'
            //border: '1px solid black'
            //marginLeft: '0px'
        }

        const goBackStyle = {
            display: 'block',
            position:"absolute",
            bottom: '0',
            left: '0',
            marginLeft: '1%',
            marginBottom: '1%'
        }

        const imageStyle = {
            width: '18%',
            marginLeft: '41%',
            marginRight: '41%',
        }

        const leftColumn = {
            position: 'absolute',
            width: '100%',
            position: 'static'
        }

        const rightColumn = {
            width: '100%',
        }

        const helpText = {
            margin: '3%',
            fontSize: '20px',
            textAlign: 'justify'
        }
        

        if(this.state.display){
            return(
                <div>
                    <div style={myStyle}>
                        <div style={titleStyle}>
                            <img style={imageStyle} src={helpTitle}/>
                        </div> 
                        <div style={leftColumn}> 
                            <div style={helpText}>
                                <p><br/><br/>At the beginning of this game, the players will be presented with a target sum at the top of the screen. This is the sum you want to reach by 
                                    selecting 3 (or 4) numbers from the board. You must reach this sum with exactly 3 (or 4) numbers, no more and no fewer. Players take turns selecting numbers 
                                    from the center of the screen by dragging and dropping the desired number to your side of the board. Once you drop the number you selected on your 
                                    side of the board, you will notice your glass will fill with water, and the number you selected will be added to your glass. The first player to 
                                    reach the target sum with their 3 (or 4) chosen numbers wins! If neither player reaches the target sum after selecting 3 (or 4) numbers each, then the game is 
                                    in a stalemate and a draw is declared.</p></div>
                        </div> 
                        <div style={rightColumn}>
                            <div style={vidStyle}>
                                    <HelpVid />
                                </div>
                            </div>            
                    </div> 
                    <input onClick={this.goBack} onMouseEnter={(e) => this.highlightBack(e)} onMouseLeave={(e) => this.unhighlightBack(e)}
                        style={backButtonStyle} src={backButton} type="image"  name="backbutton"/>
                </div>
            )
        }
        else if (this.state.goBack){
            //home, opponent, options, game, endGame
            if(this.state.returnScreen == 'game'){
                return <GameFunctions difficulty={this.state.selectedDifficulty} n={this.state.size} players={this.state.players} player1Score={this.state.player1Score} player2Score={this.state.player2Score}/>
            }
            else if(this.state.returnScreen == 'home'){
                return <GameContainer />
            }
            else if(this.state.returnScreen == 'opponent'){
                return <Opponent />
            }
            else if(this.state.returnScreen == 'options'){
                return <Options players={this.state.players} player1Score={this.state.player1Score} player2Score={this.state.player2Score}/>
            }
            else if(this.state.returnScreen == 'endGame'){
                return <EndGame player1Score={this.state.player1Score} player2Score={this.state.player2Score} player={this.state.players} winner={this.state.winner}/>
            }
        }

    };
};

export default Help;