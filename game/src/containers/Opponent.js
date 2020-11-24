import React from 'react';
import Options from './Options';
import GameFunctions from './GameFunctions';
import GameBoard from './GameBoard';
import friend from '../images/friend.png'
import computer from '../images/computer.png'

class Opponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          opponent: true,
          options: false,
          game: false
        };
        this.showOptions = this.showOptions.bind(this);
        this.showGame = this.showGame.bind(this);
    };

    showOptions(){
        console.log('Changing to Options');
        this.setState({
            options: true,
            opponent: false,
        });
    }

    showGame(){
        console.log('Changing to Options');
        this.setState({
            options: false,
            opponent: false,
            game: true
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
        }

        const cpuButtonStyle = {
            width: '30%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        const playerButtonStyle = {
            width: '30%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'

        }
        

        const title = {
            fontSize: '80px',
            textAlign: 'center'
        }

        const buttonCPU = {
            backgroundColor: 'black',
            color: 'white',
            width: '300px',
            height: '175px',
            marginLeft: '350px',
            marginTop: '250px',
            textAlign: 'center',
            position: 'fixed'
        }
        const buttonPVP = {
            backgroundColor: 'black',
            color: 'white',
            width: '300px',
            height: '175px',
            marginLeft: '350px',
            marginTop: '500px',
            textAlign: 'center',
            position: 'fixed'
        }

        if (this.state.opponent)
        {
            return (
                <div style={myStyle}>
                    <div style={title}>Choose your Opponent</div>
                    <input onClick={this.showOptions} style={playerButtonStyle} type="image" src={friend} name="helpbutton"/>
                    <input onClick={this.showOptions} style={cpuButtonStyle} type="image" src={computer} name="helpbutton"/>
                </div>
            );
        }
        else if (this.state.options)
        {
            return <Options />
        }
        else if (this.state.game){
            return <GameBoard />
        }
    };
}

export default Opponent;