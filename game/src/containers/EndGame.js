import React from 'react';
import Options from './Options';
import Help from './Help.js';
import GameFunctions from './GameFunctions';
import playAgain from '../images/friend.png' //change this to play again img
import options from '../images/computer.png' //Change this to options img
import title from '../components/OpponentTitle'; //Change this to endGame Title
import help from '../images/help.png';
import back from '../images/back_arrow.png';

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
          winner: props.winner,
          display: true
        };
        this.showHelp = this.showHelp.bind(this);
        this.showOptionsCPU = this.showOptionsCPU.bind(this);
        this.showOptionsPVP = this.showOptionsPVP.bind(this);
        this.goBack = this.goBack.bind(this);
    };


    showoptions(){
        console.log('Changing to Options CPU');
        this.setState({
            options: true,
            opponent: false,
            player: 1
        });
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
            marginLeft: '10%',
            marginTop: '5%',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '50% auto',
            //transform: 'translateX(-50%)',
            borderRadius: '10px',
            position: 'absolute',
            border: '5px solid black',
            height: '80vh',
            width: '80vw',
            backgroundColor: '#27BBCA'
        };

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
            marginRight: 'auto'

        };
        
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
        const playAgainButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            left: '1%'
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

        const title = {
            display: 'block',
            width: '60%',
            marginLeft: 'auto',
            marginRight: 'auto'
        };

        

        if (this.state.helpScreen){
            return <Help returnScreen={'endGame'}/>
        }
        if (this.state.options)
        {
            return <Options players={this.props}/>
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
                            {/* <WinTitle winner={this.props.winner}/> */}
                            winner={this.state.winner}
                        </div>

                        {/* Need to add images here for playAgain button and options button */}
                        <input onClick={this.newGame} style={playAgainButtonStyle} type="image" src={playAgain}  name="playerpbutton"/>
                        <input onClick={this.showOptions} style={optionsButtonStyle} type="image" src={options} name="cpupbutton"/>
                    </div>
                    <input onClick={this.goBack} style={backButtonStyle} src={back} type="image"  name="backbutton"/>
                    <div><input style={helpButtonStyle} onClick={this.showHelp}  type="image" src={help} name="helpbutton"/></div>
                </div>
            );
        }
    };
}


export default EndGame;