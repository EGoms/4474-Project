import React from 'react';
import Options from './Options';
import Help from './Help';
import GameContainer from './GameContainer'
import GameFunctions from './GameFunctions';
import friend from '../images/friend.png'
import helpButton from '../images/help.png';
import helpHighlighted from '../images/help-highlighted.png';
import computer from '../images/computer.png'
import DragAndDrop from './DragAndDrop';
import backButton from '../images/back_arrow.png';
import backHighlighted from '../images/back-arrow-highlighted.png';
import OpponentTitle from '../components/OpponentTitle';

class Opponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          opponent: true,
          options: false,
          game: false,
          players: 1,
          helpScreen: false,
          returnScreen: 'opponent'
        };
        this.showHelp = this.showHelp.bind(this);
        this.showOptionsCPU = this.showOptionsCPU.bind(this);
        this.showOptionsPVP = this.showOptionsPVP.bind(this);
        this.goBack = this.goBack.bind(this);
    };

    showOptionsCPU(){
        console.log('Changing to Options CPU');
        this.setState({
            options: true,
            opponent: false,
            players: 1
        });
    }

    showOptionsPVP(){
        console.log('Changing to Options PVP');
        this.setState({
            options: true,
            opponent: false,
            players: 2
        });
    }

    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            opponent: false,
            helpScreen: true,
            });
    }

    highlightHelp(e) {
        e.target.src = helpHighlighted;
    }

    unhighlightHelp(e) {
        e.target.src = helpButton;
    }

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
            backgroundColor: '#2196F3'
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
            width: '3%',
            height: 'auto',
            bottom: '2.6%',
            left: '1.3%'
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

        if (this.state.goBack)
        {
            if (this.props.inGame)
            {
                return <GameFunctions />
            }
            else
            {
                return <GameContainer />
            };
        };

        if (this.state.helpScreen){
            return <Help returnScreen={'opponent'}/>
        }
        
        if (this.state.opponent)
        {
            return (
                <div>
                    <div style={myStyle}>
                        <div style={title}>
                            <OpponentTitle />
                        </div>
                        <input onClick={this.showOptionsPVP} style={playerButtonStyle} type="image" src={friend} name="playerpbutton"/>
                        <input onClick={this.showOptionsCPU} style={cpuButtonStyle} type="image" src={computer} name="cpupbutton"/>
                    </div>
                    <input onClick={this.goBack} onMouseEnter={(e) => this.highlightBack(e)} onMouseLeave={(e) => this.unhighlightBack(e)}
                        style={backButtonStyle} src={backButton} type="image"  name="backbutton"/>
                    <input style={helpButtonStyle} onClick={this.showHelp}  type="image" src={helpButton} onMouseEnter={(e) => this.highlightHelp(e)} onMouseLeave={(e) => this.unhighlightHelp(e)} name="helpbutton"/>
                </div>
            );
        }
        else if (this.state.options)
        {
            return <Options players={this.state.players} player1Score={0} player2Score={0}/>
        }
        else if (this.state.game){
            return <GameFunctions />
        }
    };
}

export default Opponent;
