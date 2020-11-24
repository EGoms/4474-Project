import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import Help from './Help';
import Options from './Options';
import Opponent from './Opponent';
import GameFunctions from './GameFunctions';
import Play from '../images/play.png'
import water from '../images/water.png';



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
            margin: 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'fixed',
            border: '5px solid black',
            borderRadius: '10px',
            height: '90%',
            width: '80%',
            marginTop: '50px',
            backgroundColor: 'lightblue',
            backgroundImage: 'url('+water+')',
            backgroundSize: '100%',
        }

        const PlayButtonStyle = {
            width: '20%',
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop:'25px',
        }

        const helpButtonStyle = {
            position: 'absolute',
            display: 'flex',
            width: '10%',
            height: 'auto',
            bottom: '2%',
            right: '2%',

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
                    <input onClick={this.showOpponent} style={PlayButtonStyle} type="image" src={Play} name="PlayButton"/>
                    <input onClick={this.showHelp} style={helpButtonStyle} type="image" src={help} name="helpbutton"/>
                </div>
            )
        }; 
    }
};

export default GameContainer;