import React from 'react';
import Options from './Options';
import Help from './Help';
import GameContainer from './GameContainer'
import GameFunctions from './GameFunctions';
import friend from '../images/friend.png'
import help from '../images/help.png';
import computer from '../images/computer.png'
import DragAndDrop from './DragAndDrop';
import back from '../images/back_arrow.png';
import OpponentTitle from '../components/OpponentTitle';

class Opponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          opponent: true,
          options: false,
          game: false,
          player: 1,
          helpScreen: false
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

    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            opponent: false,
            helpScreen: true,
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

        const helpButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            right: '1%'
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
            return <Help inGame={this.state.inGame}/>
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
                    <input onClick={this.goBack} style={backButtonStyle} src={back} type="image"  name="backbutton"/>
                    <div><input style={helpButtonStyle} onClick={this.showHelp}  type="image" src={help} name="helpbutton"/></div>
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
