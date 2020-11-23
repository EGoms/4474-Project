import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import GameFunctions from './GameFunctions';
import GameBoard from './GameBoard';

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
            border: '5px solid black',
            height: '800px',
            width: '1000px',
            margin: 'auto',
            marginTop: '50px',
            backgroundColor: 'lightblue'
        }

        const title = {
            fontSize: '80px',
            textAlign: 'center'
        }

        const easyStyle = {
            backgroundColor: 'green',
            color: 'white',
            width: '200px',
            height: '150px',
            marginLeft: '150px',
            marginTop: '150px',
            textAlign: 'center',
            position: 'fixed'
        }

        const mediumStyle = {
            backgroundColor: 'yellow',
            color: 'solid black',
            width: '200px',
            height: '150px',
            marginLeft: '150px',
            marginTop: '300px',
            textAlign: 'center',
            position: 'fixed'
        }

        const hardStyle = {
            backgroundColor: 'red',
            color: 'white',
            width: '200px',
            height: '150px',
            marginLeft: '150px',
            marginTop: '450px',
            textAlign: 'center',
            position: 'fixed'
        }


        const  numberStyle9 = {
            backgroundColor: 'black',
            color: 'white',
            width: '200px',
            height: '150px',
            marginLeft: '550px',
            marginRight: '150px',
            marginTop: '200px',
            textAlign: 'center',
            align: 'right',
            position: 'fixed'
        }

        const  numberStyle16 = {
            backgroundColor: 'black',
            color: 'white',
            width: '200px',
            height: '150px',
            marginLeft: '550px',
            marginTop: '400px',
            textAlign: 'center',
            position: 'fixed'
        }

        const  continueStyle = {
            backgroundColor: 'purple',
            color: 'white',
            width: '100px',
            height: '75px',
            marginLeft: '850px',
            marginTop: '700px',
            textAlign: 'center',
            position: 'fixed'
        }

        if(!this.state.startGame){
            return (
                <div style={myStyle}>
                    <div style={title}>Game Options</div>
                    <button style={easyStyle} onClick={this.easy}>easy</button>
                    <button style={mediumStyle} onClick={this.medium}>medium</button>
                    <button style={hardStyle} onClick={this.hard}>hard</button>
                    <button style={numberStyle9} onClick={this.numbersNine}>9</button>
                    <button style={numberStyle16} onClick={this.numbersSixteen}>16</button>
                    <button style={continueStyle} onClick={this.playGame}>Continue</button>              
                </div>
            );       
        }
        else{
            return (
                <div>
                    <GameFunctions number={this.state.size}/>
                </div> 
            )
        }


    }
}
export default Options;
