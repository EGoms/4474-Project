import React from 'react';
import HelpVid from './HelpVid';

import helpTitle from '../images/helpTitle.png'
import back from '../images/back_arrow.png'
import GameContainer from './GameContainer'
import GameFunctions from './GameFunctions'

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGame: this.props.inGame,
            goBack: false,
            display: true
        };
        this.goBack = this.goBack.bind(this);
    };

    goBack(){
        this.setState({
            goBack: true,
            display: false
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
            backgroundColor: 'lightblue'
        }

        const titleStyle = {
            display: 'block',
            border: '3px solid rgba(0, 0, 0, 0.8)',
            width: '30%',
            height: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop:'25px',
        }

        const vidStyle = {
            display: 'block',
            border: '3px solid rgba(0, 0, 0, 0.8)',
            width: '60%',
            height: 'auto',
            margin: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        }

        function MouseOver(event) {
            event.target.style.border = '3px solid darkRed';
            
        }

        function MouseOut(event){
            event.target.style.border = 'none';
        }
    
        const helpButtonStyle = {
            display: 'flex',
            borderRadius: '10px',
            float: 'left',
            position: 'absolute',
            width: '50px',
            height: 'auto',
            bottom: '2%',
            left: '2%',
            marginLeft: '10px',
        }



        if(this.state.display){
            return(
                <div style={myStyle}>
                    <div className="ui container">
                        <img src={helpTitle} style={titleStyle}
                        />
                    </div>
                    <div style={vidStyle}>
                        <HelpVid />
                    </div>
                    <input onClick={this.goBack} style={helpButtonStyle} onMouseOver={MouseOver} onMouseOut={MouseOut} src={back} type="image"  name="helpbutton"/>
                </div> 
            )
        }
        else if (this.state.goBack){
            if (this.props.inGame){
                return <GameFunctions />
            }
            else{
                return <GameContainer />
            }
        }

    };
};

export default Help;