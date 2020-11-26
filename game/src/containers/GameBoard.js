import React from 'react';
import help from '../images/help.png';
import Image from '../components/Image';
import Title from '../components/Title';
import Help from './Help';
import Options from './Options';
import Opponent from './Opponent';
import GameFunctions, {AddTable} from './GameFunctions';

//gameplay contianer

function DifficultyMessage(props) {
    const difficult = props.difficulty;
    console.log(difficult);
    if (difficult === "easy") {
      return "Easy Difficulty";
    } else if (difficult == "medium") {
        return "Medium Difficulty"
    } else {
        return "Hard Difficulty";
    }
  }

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: 1,
            difficulty: 'easy',
            numbers: 9,
            inGame: true
        };
    };


    render(){
        const myStyle = {
            display: 'grid',
            border: '3px solid black',
            height: '800px',
            width: '80%',
            margin: 'auto',
            marginTop: '50px',
            backgroundColor: 'powderblue',
            overflow: 'hidden'
        }

        const playArea = {

        }

        const test = {
            height: '100%',
            width: '100%',
            overflow: 'hidden'
        }

        const test2 = {
            float: 'left',
            width: '10%',
            height: '100%',
            border: '0.5px solid black'
        }

        const test3 = {
            float: 'left',
            width: '79%',
            height: '100%',
            border: '0.5px solid black'
        }


        if(this.state.inGame){
            return(
                <div><center><DifficultyMessage difficulty={this.state.difficulty}/></center>
                    <div style={myStyle}>
                        <div style={test}>
                            <div style={test2}><center>Player 1 Area</center></div>
                            <div id="masterTable" style={test3}>
                                <center>Game Board</center>
                                {AddTable(3)}
                            </div>
                            <div style={test2}><center>Player 2 Area</center></div>
                        </div>
                    </div>
                </div>
            )
        }
        

    }
}

export default GameBoard;