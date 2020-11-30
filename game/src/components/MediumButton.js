import React from 'react';
import medium from '../images/medium.png';


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
            margin: 'auto',
            height: '80%',
            width: 'auto',
            gridTemplateColumns: '1fr 1fr'
        }

        const mediumStyleSelected = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto',
            border: '1px solid coral'
        }

        if(this.props.difficulty =='medium'){
            return(
                <input  style={mediumStyleSelected} type="image" src={medium} name="medium"/>
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
            