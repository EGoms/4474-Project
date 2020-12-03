import React from 'react';
import medium from '../images/medium.png';
import mediumSelected from '../images/medium-highlighted.png'


class MediumButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 1,
            selectedDifficulty: 'medium',
            size: 9,
        };
    };

    render(){
        const mediumStyle = {
            display: 'block',
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            gridTemplateColumns: '1fr 1fr',
            outline: 'none'
        }

        const mediumStyleSelected = {
            display: 'block',
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        if(this.props.difficulty =='medium'){
            return(
                <input  style={mediumStyleSelected} type="image" src={mediumSelected} name="medium"/>
            )
        }
        else{
            return(
                <input style={mediumStyle} type="image" src={medium} name="medium"/>    
            )
        }
    }
}

export default MediumButton;
            