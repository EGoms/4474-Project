import React from 'react';
import title from '../images/title.png';

class Title extends React.Component {
    render() {
        return ( 
            <div className="ui container">
                <img src={title} 
                    style=
                        {{
                            border: '1px solid rgba(0, 0, 0, 0.8)',
                            width: 'auto',
                            height: '225px',
                            marginLeft: '300px',
                            textAlign: 'center',
                            position: 'fixed'}}
                />
            </div>
        );
    }
};

export default Title;
