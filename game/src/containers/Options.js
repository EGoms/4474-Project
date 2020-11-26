import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import GameFunctions from './GameFunctions';
import GameBoard from './GameBoard';
import easy from '../images/easy.png';
import medium from '../images/medium.png';
import hard from '../images/hard.png';
import nine from '../images/nine.png';
import sixteen from '../images/sixteen.png';
import start from '../images/startButton.png';
import EasyButton from '../components/EasyButton';
import MediumButton from '../components/MediumButton';
import HardButton from '../components/HardButton';
import DragAndDrop from '../containers/DragAndDrop';
import Number9Render from '../components/Number9Render';
import Number16Render from '../components/Number16Render';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 1,
            selectedDifficulty: 'easy',
            size: '9',
            startGame: false
        };
        this.easy = this.easy.bind(this);
        this.medium = this.medium.bind(this);
        this.hard = this.hard.bind(this);
        this.setHard = this.hard.bind(this);

        this.numberNine = this.numberNine.bind(this);
        this.numberSixteen = this.numberSixteen.bind(this);
        this.playGame = this.playGame.bind(this);
        this.makeGameSettings = this.makeGameSettings.bind(this);
    };

    /**
     * Game Settings needed to set up a level
     * Players = number of players, 1 for player vs cpu. 2 for pvp
     * difficulty = difficulty setting, one of 'easy', 'medium', 'hard' that defines the game logic
     */
    makeGameSettings(){
        const settings = {
            players:  1
        }
    }

    playGame(){
        this.setState({
            startGame: true
        })
    }

    numberNine(){
        this.setState({
            size: 9
        })
    }
    numberSixteen(){
        this.setState({
            size: 16
        })
    }

    easy(){
        console.log('selecting easy')
        this.setState({
            selectedDifficulty: 'easy',
        })
    }

    medium(){
        console.log('selecting medium')
        this.setState({
            selectedDifficulty: 'medium',
        })
    }

    hard(){
        console.log('selecting hard')
        this.setState({
            selectedDifficulty: 'hard',
        })
    }

    render(){
        const myStyle = {
            display: 'inline-grid',
            gridTemplateColumns: 'auto auto',
            backgroundColor: '#2196F3',
            padding: '10px',
            // margin: 'auto',
            // left: '50%',
            // transform: 'translateX(-50%)',
            // position: 'fixed',
            // border: '5px solid black',
            // borderRadius: '10px',
            height: '90%',
            width: '80%'
            // marginTop: '50px',
            // backgroundColor: 'pink',
            // position: 'absolute'
        };

        const title = {
            fontSize: '80px',
            textAlign: 'center',
            border: 'solid black',
            gridColumnStart: '1',
            gridColumnEnd: '3'
        };

        const  continueStyle = {
            color: 'white',
            width: '100px',
            height: '75px',
            marginLeft: '850px',
            marginTop: '700px',
            textAlign: 'center',
            right: '3%',
            bottom: '2%',
            position: 'fixed'
        }

        const testStyle = {
            gridColumnStart: '2',
            gridColumnEnd: '4',
            border: '5px solid white',
            width: '45%'
        };

        // Render options screen
        if(!this.state.startGame){
            return (
                <div style={myStyle}>
                    <div style={title}>Game Option</div>
                    <div class="column" style={{border: '5px solid black', padding: '20px'}}>
                        <div onClick={this.easy}><EasyButton difficulty={this.state.selectedDifficulty}/></div>
                        <div onClick={this.medium}><MediumButton difficulty={this.state.selectedDifficulty}/></div>
                        <div onClick={this.hard}><HardButton difficulty={this.state.selectedDifficulty}/></div>
                    </div>
                    <div class="column" style={{border: '5px solid black', padding: '20px'}}>
                        <div> <Number9Render size={this.state.size}/></div>
                        <div> <Number16Render size={this.state.size}/></div>
                    </div>
                </div>
                    // {/* <div style={title}>Game Options</div>
                    // <div style={testStyle}> 
                    //     <div onClick={this.easy}><EasyButton difficulty={this.state.selectedDifficulty}/></div>
                    //     <div onClick={this.medium}><MediumButton difficulty={this.state.selectedDifficulty}/></div>
                    //     <div onClick={this.hard}><HardButton difficulty={this.state.selectedDifficulty}/></div>
                    // </div>
                    // <div style={{display: 'inline', border: '5px solid black', width: '45%'}}>
                    //     <div style={{display: 'inlineBlock', border: '5px solid green'}}> <Number9Render size={this.state.size}/></div>
                    //     <div style={{border: '5px solid black'}}> <Number16Render size={this.state.size}/></div>
                    // </div> */}
            )
        }
        else{
            return (
                <div>
                    <DragAndDrop />
                </div> 
            )
        };


    };
};
export default Options;
