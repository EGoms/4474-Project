import React from 'react';
import Options from './Options'

class Opponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          opponent: true,
          options: false,
        };
        this.showOptions = this.showOptions.bind(this);
    };

    showOptions(){
        console.log('Changing to Options');
        this.setState({
            options: true,
            opponent: false,
        });
    }

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
                    <button style={buttonCPU} onClick={this.showOptions}>CPU</button>
                    <button style={buttonPVP} onClick={this.showOptions}>PVP</button>
                </div>
            );
        }
        else if (this.state.options)
        {
            return <Options />
        }
    };
}

export default Opponent;