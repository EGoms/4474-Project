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
            marginLeft: '20%'
        }

        const mediumStyleSelected = {
            marginLeft: '20%',
            border: '0px solid blue',
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
            