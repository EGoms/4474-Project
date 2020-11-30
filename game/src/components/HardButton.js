import React from 'react';
import hard from '../images/hard.png';


class HardButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 1,
            selectedDifficulty: 'hard',
            size: 9,
        };
    };

    render(){
        const hardStyle = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto',
            gridTemplateColumns: '1fr 1fr'
        }

        const hardStyleSelected = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto',
            border: '1px solid coral'
        }

        if(this.props.difficulty =='hard'){
            return(
                <input  style={hardStyleSelected} type="image" src={hard} name="hard"/>
            )
        }
        else{
            return(
                <input style={hardStyle} type="image" src={hard} name="hard"/>
        
            )
        }
    }
}

export default HardButton;
            