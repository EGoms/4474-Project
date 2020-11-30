import React from 'react';
import Options from './Options';
import GameFunctions from './GameFunctions';
import GameBoard from './GameBoard';
import friend from '../images/friend.png'
import computer from '../images/computer.png'
import DragAndDrop from './DragAndDrop';

class Opponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          opponent: true,
          options: false,
          game: false,
          player: 1
        };
        this.showOptionsCPU = this.showOptionsCPU.bind(this);
        this.showOptionsPVP = this.showOptionsPVP.bind(this);
        //this.showGame = this.showGame.bind(this);
    };

    showOptionsCPU(){
        console.log('Changing to Options CPU');
        this.setState({
            options: true,
            opponent: false,
            player: 1
        });
    }

    showOptionsPVP(){
        console.log('Changing to Options PVP');
        this.setState({
            options: true,
            opponent: false,
            player: 2
        });
    }

    // showGame(){
    //     console.log('Changing to Options');
    //     this.setState({
    //         options: false,
    //         opponent: false,
    //         game: true
    //     });
    // }

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

        if (this.state.opponent)
        {
            return (
                <div style={myStyle}>
                    <div style={title}>Choose your Opponent</div>
                    <input onClick={this.showOptionsPVP} style={playerButtonStyle} type="image" src={friend} name="helpbutton"/>
                    <input onClick={this.showOptionsCPU} style={cpuButtonStyle} type="image" src={computer} name="helpbutton"/>
                </div>
            );
        }
        else if (this.state.options)
        {
            return <Options players={this.state.player}/>
        }
        else if (this.state.game){
            return <GameFunctions />
        }
    };
}

export default Opponent;
