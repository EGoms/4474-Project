import React from 'react';
import easy from '../images/easy.png';


class EasyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 1,
            selectedDifficulty: props.difficulty,
            size: 9,
        };
    };

    render(){
        const easyStyle = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto'
        }

        const easyStyleSelected = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto',
            border: '1px solid coral'
        }

        if(this.props.difficulty =='easy'){
            return(
                <input style={easyStyleSelected} type="image" src={easy} name="Easy"/>
            )
        }
        else{
            return(
                <input style={easyStyle} type="image" src={easy} name="Easy"/>
            )
        }
    }
}
export default EasyButton;
            