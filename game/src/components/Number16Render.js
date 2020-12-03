import React from 'react';
import sixteen from '../images/sixteen.png';
import sixteenSelected from '../images/sixteen-highlighted.png';

class Number16Render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 16,
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

        if(this.props.size == 16){
            return(
                <input style={numberStyle} type="image" src={sixteenSelected} name="NumberSixteen"/>
            )
        }
        else{
            return(
                <input style={numberStyleSelected} type="image" src={sixteen} name="NumberSixteen"/>
            )
        }
    }
}
export default Number16Render;
