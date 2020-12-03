import React from 'react';
import nine from '../images/nine.png';
import ninSelected from '../images/nine-highlighted.png'

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
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        const numberStyleSelected = {
            display: 'block',
            margin: '1% auto',
            height: '75%',
            width: 'auto',
            outline: 'none'
        }

        if(this.props.size == '9'){
            return(
                <input style={numberStyle} type="image" src={ninSelected} name="NumberNine"/>
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
            