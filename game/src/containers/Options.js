import React from 'react';
import Opponent from './Opponent';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import OptionsTitle from '../images/options.png';
import GameFunctions from './GameFunctions';
import GameBoard from './GameBoard';
import easy from '../images/easy.png';
import medium from '../images/medium.png';
import hard from '../images/hard.png';
import nine from '../images/nine.png';
import sixteen from '../images/sixteen.png';
import start from '../images/startButton.png';
import continueButton from '../images/continue.png';
import EasyButton from '../components/EasyButton';
import MediumButton from '../components/MediumButton';
import HardButton from '../components/HardButton';
import DragAndDrop from '../containers/DragAndDrop';
import Number9Render from '../components/Number9Render';
import Number16Render from '../components/Number16Render';
import ContinueButtonComponent from '../components/ContinueButtonComponent';
import back from '../images/back_arrow.png'


class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: props.players,
            selectedDifficulty: 'easy',
            size: 9,
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

        this.goBack = this.goBack.bind(this);
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
        console.log('selecting 9')
        this.setState({
            size: 9
        })
    }
    numberSixteen(){
        console.log('selecting 16')
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

    goBack(){
        this.setState({
            goBack: true,
            display: false
        })
    }

    render(){
        const myStyle = {
            display: 'inline-grid',
            gridTemplateColumns: 'auto auto',
            gridTemplateRows: '20% auto',
            backgroundColor: '#27BBCA',
            marginLeft: '10%',
            marginTop: '5%',
            //marginBottom: '5%',
            //transform: 'translateX(-50%)',
            //transform: 'translateY(-50%)',
            height: '80vh',
            width: '80vw',
            position: 'absolute',
            border: '5px solid black',
            borderRadius: '10px',
            //border: '0.5px solid purple'
        };

        const titleStyle = {
            gridColumnStart: '1',
            gridColumnEnd: '3',
            textAlign: 'center',
            height: '100%',
            //border: '0.5px solid black'
        };

        const subTitle = {
            fontSize: '40px',
            textAlign: 'center',
            //padding: '0px 0px 10px 0px',
            //border: '0.5px solid orange',
            height: '10%'
            
        };

        const cellStyle = { 
            //padding: '10px 0px 10px 0px',
            height: '28%',
            //border: '0.5px solid green'
        }

        const continueCellStyle = {
            height: '30%',
            //border: '0.5px solid pink',
            textAlign: 'right'
        }

        const imageStyle = {
            height: '100%',
            width: 'auto'
        }

        const columnStyle = {
            // padding: '20px', 
            justifyItems: 'center', 
            alignItems: 'center'
        }

        const backButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            left: '1%'
            //border: '1px solid black'
            //marginLeft: '0px'
        }

        if (this.state.goBack)
        {
            if (this.props.inGame)
            {
                return <GameFunctions />
            }
            else
            {
                return <Opponent />
            };
        };

        // Render options screen
        if(!this.state.startGame){
            return (
                <div style={myStyle}>
                    <div style={titleStyle}><img style={imageStyle} src={OptionsTitle}/></div>
                    <div class="column" style={columnStyle}>
                        <div style={subTitle}>Difficulty</div>
                        <div onClick={this.easy} style={cellStyle}><EasyButton difficulty={this.state.selectedDifficulty}/></div>
                        <div onClick={this.medium} style={cellStyle}><MediumButton difficulty={this.state.selectedDifficulty}/></div>
                        <div onClick={this.hard} style={cellStyle}><HardButton difficulty={this.state.selectedDifficulty}/></div>
                    </div>
                    <input onClick={this.goBack} style={backButtonStyle} src={back} type="image"  name="backbutton"/>
                    <div class="column" style={columnStyle}>
                        <div style={subTitle}>Board Size</div>
                        <div onClick={this.numberNine} style={cellStyle}> <Number9Render size={this.state.size}/></div>
                        <div onClick={this.numberSixteen} style={cellStyle}> <Number16Render size={this.state.size}/></div>
                        <div onClick={this.playGame} style={continueCellStyle}><ContinueButtonComponent/></div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <GameFunctions difficulty size players={this.state.players} n={this.state.size} players={this.state.players} />
                    {/* <GameFunctions difficulty={this.state.difficulty} n={this.state.size} players={this.state.players} /> */}
                </div> 
            )
        };


    };
};
export default Options;
