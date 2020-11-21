import React from 'react';
import HelpVid from './HelpVid';

import helpTitle from '../images/helpTitle.png'
import back from '../images/back_arrow.png'


class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGame: false
        };

    };

    goBack(){
        
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

        const titleStyle = {
            display: 'block',
            border: '3px solid rgba(0, 0, 0, 0.8)',
            height: '200px',
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop:'25px',

        }
        const vidStyle = {
            display: 'block',
            border: '3px solid rgba(0, 0, 0, 0.8)',
            width: '600px',
            height: '400px',
            margin: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const helpButtonStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            width: '50px',
            marginTop: '748px',
            marginLeft: '10px',
            textAlign: 'center',
            position: 'fixed'
        }
        return(
            <div style={myStyle}>
                <div className="ui container">
                    <img src={helpTitle} style={titleStyle}
                    />
                </div>
                <div style={vidStyle}>
                    <HelpVid />
                </div>
                <input onClick={this.goBack} style={helpButtonStyle} src={back} type="image"  name="helpbutton"/>
            </div> 
            )
    };
};

export default Help;