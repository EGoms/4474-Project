import React from 'react';
import nine from '../images/nine.png';

class Number9Render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 9,
        };
    };

    render(){
        const numberStyle = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto'
        }

        const numberStyleSelected = {
            display: 'block',
            margin: 'auto',
            height: '80%',
            width: 'auto'
        }

        if(this.props.size == '9'){
            return(
                <input style={numberStyle} type="image" src={nine} name="NumberNine"/>
            )
        }
        else{
            return(
                <input style={numberStyleSelected} type="image" src={nine} name="NumberNine"/>
            )
        }
    }
}
export default Number9Render;
            