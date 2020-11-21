import React from 'react';
import water from '../images/water.png';

class Image extends React.Component {
    render() {
        return ( 
            <div className="ui container">
                <img src={water} 
                    style=
                        {{
                            width: '100%',
                            height: '800px',
                            marginTop: '0px'}}
                />
            </div>
        );
    }
};

export default Image;
