import React from 'react';
import help from '../images/help.png';

// This class is used as the outermost container for the game. Inside will be the game 
// board (a smaller container), and the persistent buttons in the corners (state dependent)

class Game_container extends React.Component {
    render() {
        const myStyle = {
            display: 'grid',
            border: '5px solid black',
            height: '800px',
            width: '1000px',
            margin: 'auto',
            marginTop: '50px',
            backgroundColor: 'lightblue'
        }

        const gridStyle1 = {
            border: '1px solid rgba(0, 0, 0, 0.8)',
            width: 'auto',
            height: '150px',
            textAlign: 'center',
            margin: '5%',
            position: 'relative'
        }

        const gridStyle2 = {
            width: 'auto',
            height: '200px',
            margin: '5%',
            border: '1px solid rgba(0, 0, 0, 0.8)'
        }

        const buttonStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            width: '50%',
            marginLeft: '25%',
            textAlign: 'center'
        }

        const helpButtonStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            width: '10%',
            marginTop: '20%',
            marginLeft: '90%',
            textAlign: 'center'
        }

        return ( 
            <div style={myStyle}>
                <div style={gridStyle1}>Title</div>
                <div style={gridStyle2}>Game and Image here</div>
                <button style={buttonStyle}>Play</button>
                <button style={helpButtonStyle}>Help</button>
                <img src={help} alt='HelpButton' />
            </div>
        );
    }
};

export default Game_container;