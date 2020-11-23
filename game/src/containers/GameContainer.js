import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import Help from './Help';
import Options from './Options';
import Opponent from './Opponent';
import GameFunctions from './GameFunctions';

// This class is used as the outermost container for the game. Inside will be the game 
// board (a smaller container), and the persistent buttons in the corners (state dependent)

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inGame: false,
          homeScreen: true,
          helpScreen: false,
          opponent: false,
          options: false,
        };
        this.showHelp = this.showHelp.bind(this);
        this.showOpponent = this.showOpponent.bind(this);
      };

    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            homeScreen: false,
            helpScreen: true,
            });
    }
    showOpponent(){
        console.log('Changing to Opponent Screen');
        this.setState({
            inGame: false,
            homeScreen: false,
            helpScreen: false,
            opponent: true,
            options: false,
        });
    }
    
    showGame(){
        console.log('Changing to Game Screen');
        this.setState({
            inGame: true,
            homeScreen: false,
            helpScreen: false,
            opponent: false,
            options: false,
        });
    }


    render() {
        const myStyle = {
            display: 'grid',
            border: '5px solid black',
            height: '800px',
            width: '1000px',
            margin: 'auto',
            marginTop: '50px',
            backgroundColor: 'lightblue'
        }

        const buttonStyle = {
            backgroundColor: 'black',
            color: 'white',
            width: '300px',
            height: '175px',
            marginLeft: '350px',
            marginTop: '450px',
            textAlign: 'center',
            position: 'fixed'
        }

        const helpButtonStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            width: '50px',
            marginTop: '748px',
            marginLeft: '945px',
            textAlign: 'center',
            position: 'fixed'
        }

        if (this.state.helpScreen){
            return <Help inGame={this.state.inGame}/>
        }
        else if(this.state.inGame){
            return <GameFunctions />
        }
        else if(this.state.options){
            return <Options />
        }
        else if(this.state.opponent){
            return <Opponent />
        }
        else if (this.state.homeScreen){
            return (
                <div style={myStyle}>
                    <Title />
                    <Image />
                    <button style={buttonStyle} onClick={this.showOpponent}>Play</button>

                    <input onClick={this.showHelp} style={helpButtonStyle} type="image" src={help} name="helpbutton"/>
                </div>
            )
        }; 
    }
};

export default GameContainer;