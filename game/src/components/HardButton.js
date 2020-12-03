import React from 'react';
import hard from '../images/hard.png';
import hardSelected from '../images/hard-highlighted.png'


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
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            gridTemplateColumns: '1fr 1fr',
            outline: 'none'
        }

        const hardStyleSelected = {
            display: 'block',
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        if(this.props.difficulty =='hard'){
            return(
                <input  style={hardStyleSelected} type="image" src={hardSelected} name="hard"/>
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
            