import React from 'react';
import easy from '../images/easy.png';


class Number9Render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 9,
        };
    };

    render(){
        const  numberStyle = {
            width: '15%',
            height: 'auto',
            marginLeft: '60%',
            marginRight: '150px',
            marginTop: '20%',
            textAlign: 'center',
            float: 'right',
            position: 'absolute'
        }

        const  numberStyleSelected = {
            width: '15%',
            height: 'auto',
            marginLeft: '60%',
            marginRight: '150px',
            marginTop: '20%',
            textAlign: 'center',
            float: 'right',
            position: 'absolute',
            border: '2px'
        }

        if(this.props.size == 9){
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
export default EasyButton;
            