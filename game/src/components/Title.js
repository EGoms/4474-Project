import React from 'react';
import title from '../images/title.png';
import cartoon from '../images/waterCartoon.png';


class Title extends React.Component {
    render() {
        const cartoonStyle = {
            width: '10%',
            marginLeft: '1%'
        }
        return ( 
            <div className="ui container" style={{textAlign: 'center'}}>
                <img src={title} 
                    style=
                        {{
                            // display: 'block',
                            height: 'auto',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '8%',
                            width: 'auto',
                            height: '225px',
                            textAlign: 'center',
                        }}
                />
                <img src={cartoon} style={cartoonStyle}/>
            </div>
        );
    }
};

export default Title;
