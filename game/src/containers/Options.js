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

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            easy: false,
            medium: false,
            hard: false,
            size: 9,
            startGame: false
        };
        this.easy = this.easy.bind(this);
        this.medium = this.hard.bind(this);
        this.hard = this.medium.bind(this);
        this.numbersNine = this.numbersNine.bind(this);
        this.numbersSixteen = this.numbersSixteen.bind(this);
        this.playGame = this.playGame.bind(this);
    };

    playGame(){
        this.setState({
            startGame: true
        })
    }

    numbersNine(){
        this.setState({
            size: 9
        })
    }
    numbersSixteen(){
        this.setState({
            size: 16
        })
    }

    easy(){
        this.setState({
            easy: true,
            medium: false,
            hard: false,
        })
    }
    medium(){
        this.setState({
            easy: false,
            medium: true,
            hard: false,
        })
    }
    hard(){
        this.setState({
            easy: false,
            medium: false,
            hard: true,
        })
    }
    render(){
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
        }

        const title = {
            fontSize: '80px',
            textAlign: 'center'
        }

        const easyStyle = {
            marginLeft: '20%'

        }

        const mediumStyle = {
            marginLeft: '20%'
        }

        const hardStyle = {
            marginLeft: '20%'

        }

        const  numberStyle9 = {
            width: '200px',
            height: 'auto',
            marginLeft: '60%',
            marginRight: '150px',
            marginTop: '20%',
            textAlign: 'center',
            position: 'fixed'
        }

        const  numberStyle16 = {
            width: '200px',
            height: 'auto',
            marginLeft: '60%',
            marginTop: '35%',
            textAlign: 'center',
            position: 'fixed'
        }

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

        if(!this.state.startGame){
            return (
                <div style={myStyle}>
                    <div style={title}>Game Options</div>
                    <input onClick={this.easy} style={easyStyle} type="image" src={easy} name="Easy"/>
                    <input onClick={this.medium} style={mediumStyle} type="image" src={medium} name="Easy"/>
                    <input onclick={this.medium} style={hardStyle} type="image" src={hard} name="Easy"/>
                    <input onclick={this.numberNine} style={numberStyle9} type="image" src={nine} name="Easy"/>
                    <input onclick={this.numbersSixteen} style={numberStyle16} type="image" src={sixteen} name="Easy"/>
                    <input onClick={this.playGame} style={continueStyle} type="image" src={start} name="Easy"/>
                </div>
            );       
        }
        else{
            return (
                <div>
                    <GameBoard />
                </div> 
            )
        }


    }
}
export default Options;
