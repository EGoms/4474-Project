import React from 'react';
import title from '../images/title.png';
import cartoon from '../images/waterCartoon.png';


class Title extends React.Component {
    render() {
        const cartoonStyle = {
            width: '17%',
            marginLeft: '1%'
        }
        return ( 
            <div style={{textAlign:'center'}}>
                <img src={title} 
                    style=
                        {{
                            display: 'inline',
                            height: '40%',
                            width: '40%',
                            marginTop: '9.65265%',   //plz hal                      
                            textAlign: 'center'
                        }}
                />
                <img src={cartoon} style={cartoonStyle}/>
            </div>
        );
    }
};

export default Title;
