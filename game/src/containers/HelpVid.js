import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import helpTitle from '../images/helpTitle.png'


class HelpVid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGame: false
        };
    };
    render(){ 

        const vidStyle = {
            height: 'auto',
            width: '90%',
            marginTop: '12.5%',
            marginLeft: '5%'
        }
        return(
                <video style={vidStyle} controls>   
                </video>
            )
    };
};

export default HelpVid;