import React from 'react';
import continueButton from '../images/continue.png';


class ContinueButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render(){
        const buttonStyle = {
            // display: 'block',
            height: '50%',
            width: 'auto',
            float: 'right'
        }

        return (
            <input style={buttonStyle} type="image" src={continueButton} name="continueButton"/>
        )
    }
}
export default ContinueButtonComponent;
            