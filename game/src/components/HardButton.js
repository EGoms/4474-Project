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
            marginLeft: '20%'
        }

        const hardStyleSelected = {
            marginLeft: '20%',
            border: '1px solid coral',
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
            