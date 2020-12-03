import React from 'react';
import title from '../images/OpponentTitle.png';


class OpponentTitle extends React.Component {
    render() {
        const titleStyle = {
            height: 'auto',
            width: '90%',
            marginLeft: '5%',
            marginTop: '15%',
            // marginRight: 'auto',
            // marginTop: '9.65265%',                   
            // textAlign: 'center',
            // border: '5px solid black'
        }

        return ( 
                <img src={title} style={titleStyle}/>
        );
    }
};

export default OpponentTitle;