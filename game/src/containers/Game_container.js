import React from 'react';


// This class is used as the outermost container for the game. Inside will be the game 
// board (a smaller container), and the persistent buttons in the corners (state dependent)


class Game_container extends React.Component {
    render() {
        return ( 
            <div className="ui container" style={{ marginTop: '10px'}}>
                <img src="../../images "/>
            </div>
        );
    }
};

export default Game_container;