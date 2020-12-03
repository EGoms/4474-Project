import React from 'react';
import easy from '../images/easy.png';
import easySelected from '../images/easy-highlighted.png'


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
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        const easyStyleSelected = {
            display: 'block',
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        if(this.props.difficulty =='easy'){
            return(
                <input style={easyStyleSelected} type="image" src={easySelected} name="Easy"/>
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
            