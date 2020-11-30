import React from 'react';
import sixteen from '../images/sixteen.png';

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

        if(this.props.size == 16){
            return(
                <input style={numberStyle} type="image" src={sixteen} name="NumberSixteen"/>
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
