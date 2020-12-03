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
            gridTemplateColumns: '50% auto',
            gridTemplateRows: '25% auto',
            marginLeft: '10%',
            marginTop: '5%',
            position: 'absolute',
            border: '5px solid black',
            borderRadius: '10px',
            height: '80vh',
            width: '80vw',
            backgroundColor: '#2196F3',
            position: 'absolute'
        }

        const titleStyle = {
            display: 'block',
            gridColumnStart: '1',
            gridColumnEnd: '3',

        }

        const vidStyle = {
            gridColumnStart: '2',
            gridColumnEnd: '3',
            height: '80%',
            width: '100%'
        }

        const backImageStyle = {
            width: '50%'
        }
        const goBackStyle = {
            display: 'block',
            position:"absolute",
            bottom: '0',
            left: '0',
            marginLeft: '1%',
            marginBottom: '1%'
        }

        const imageStyle = {
            width: '18%',
            marginLeft: '41%',
            marginRight: '41%',
        }

        const leftColumn = {
            position: 'absolute',
            width: '100%',
            position: 'static'
        }

        const rightColumn = {
            width: '100%',
        }

        const helpText = {
            margin: '3%',
            fontSize: '20px',
            textAlign: 'justify'
        }

        if(this.state.display){
            return(
                <div style={myStyle}>
                    <div style={titleStyle}>
                        <img style={imageStyle} src={helpTitle}/>
                    </div> 
                    <div style={leftColumn}> 
                        <div style={helpText}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div style={goBackStyle}>
                            <input style={backImageStyle} onClick={this.goBack} src={back} type="image"  name="helpbutton"/>
                        </div>
                        
                    </div> 
                    <div style={rightColumn}>
                        <div style={vidStyle}>
                                <HelpVid />
                            </div>
                        </div>            
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