import React, { useState, useEffect } from 'react';
import Speech from 'react-speech';
import Help from './Help';
import help from '../images/help.png';
import hint from '../images/hint.png';
import Options from '../containers/Options.js';
import droplet from '../images/droplet.png';
import audioOnButton from '../images/audio_on.png';
import audioOffButton from '../images/audio_off.png';
import audioOnHighlighted from '../images/audio-on-highlighted.png';
import audioOffHighlighted from '../images/audio-off-highlighted.png';
import difficultyButton from '../images/difficulty.png'
import difficultyHighlighted from '../images/difficulty-highlighted.png'
import newGameButton from '../images/new.png'
import EndGame from '../containers/EndGame.js';

let x = 0;
    /**
     * Returns a whole number between min and max
     * @param {*} min 
     * @param {*} max 
     */
function getWholeNumber(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Returns a decimal number between min and max
     * @param {*} min 
     * @param {*} max 
     */
function getDecimalNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min * 10)/10;
    }

    /**
     * Create all combinations of size k from the set
     * @param {*} set 
     * @param {*} k 
     */
function k_combinations(set, k) {
	    var i, j, combs, head, tailcombs;
	
	    if (k > set.length || k <= 0) {
		    return [];
	    }
	
	    if (k === set.length) {
		    return [set];
	    }
	
	    if (k === 1) {
		    combs = [];
		    for (i = 0; i < set.length; i++) {
			    combs.push([set[i]]);
		    }
		    return combs;
	    }
	
	    combs = [];
	    for (i = 0; i < set.length - k + 1; i++) {
		    head = set.slice(i, i + 1);
		    tailcombs = k_combinations(set.slice(i + 1), k - 1);
		    for (j = 0; j < tailcombs.length; j++) {
			    combs.push(head.concat(tailcombs[j]));
		    }
	    }
	    return combs;
    }

    /**
     * Identify the most common element
     * @param {*} arr 
     */
function mostUsed(arr) {
        return Object.entries(arr).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    }


function generateNumbers(state) {
    let n = state.n;
    let difficulty = state.difficulty;
    let nums = []
    if (difficulty === "easy") {
        for (let i = 0; i < n**2; i++) {
            nums.push(getWholeNumber(1, n**2));
        }
    } else if (difficulty === "medium") {
        for (let i = 0; i < n**2; i++) {
            nums.push(getWholeNumber(-1*n**2, n**2));
        }
    } else {
        for (let i = 0; i < n**2; i++) {
            nums.push(getDecimalNumber(1, n**2));
        }
    }
    return nums;
}
    /**
     * Logic to build the game
     * @param {*} n - Should be user supplied either 3 or 4. Controls game size 
     * @param {*} fn - Function for what kind of numbers to choose (getWholeNumber / getDecimalNumber)
     */
function logic(state) {
        let n = state.n;
        var nums = generateNumbers(state);
        
        let combinations = k_combinations(nums, n);
        let sums = [];
        //Calculate the sum of each combinations
        for (var i = 0; i < combinations.length; i++) {
            var x = Math.round(combinations[i].reduce((a, b) => a + b, 0)  * 10) / 10;
            sums.push(x);
        }

        var obj = {};
        //Build count map of the sums
        for (var j = 0; j < sums.length; j++) {
            obj[sums[j]] = (obj[sums[j]] || 0) + 1;
        }

        var targetSum = mostUsed(obj);
        return [nums, targetSum];
    }

function makeArrayOf(value, length) {
    var arr = [], i = length;
    while (i--) {
        arr[i] = value;
    }
    return arr;
}

function bits(n){
    var res = [];
    while(n){
      res.push(n & 1);
      n >>= 1;
    }
    return res;
  }
//////////////////////////////////////////END OF FUNCTIONS/////////////////////////////////////////////////////////

class GameFunctions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
            ],
            target: 0,                      // Target sum
            players: props.players,         // Number of players
            n: Math.sqrt(props.n),          // sqrt(9) or sqrt(16) = 3 or 4
            difficulty: props.difficulty,   // Difficulty level
            player1Sum: 0,                  // Player 1's current sum
            player2Sum: 0,                  // Player 2's current sum
            player1Moves: 0,                // Number of moves made by Player 1
            player2Moves: 0,                // Number of moves made by Player 2
            p1: 1,                          // Used for determining turn
            p2: 0,                          // Used for determining turn
            endGame: false,                 // Used to determine if E.O.G
            helpscreen: false,
            newGame: false,
            available: makeArrayOf(0, props.n),
            returnScreen: 'game',
            winner: '',
            buttons: 0,
            muted: 0
        };
        this.showHelp = this.showHelp.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.endGame = this.endGame.bind(this);
        this.showHintP1 = this.showHintP1.bind(this);
        this.showHintP2 = this.showHintP2.bind(this);
        this.muteAudio = this.muteAudio.bind(this);
        this.newGame = this.newGame.bind(this);

        var values = logic(this.state);
        var nums = values[0];
        var targetSum = values[1];
        this.state.target = targetSum;
        var i = 0;
        for (i = 0; i < nums.length; i++) {
            this.state.tasks.push({id: i,
                 name: nums[i], 
                 category: "board"})
        }
    };

    endGame(){
        this.setState({
            endGame: true
        })
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    //Classic onDrop
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        
        let tasks = this.state.tasks.filter((task) => {
            if (task.id == id) {
                task.category = cat;
            }
            return task;
        });
 
        this.setState({
            ...this.state,
            tasks
        });
     }

    //OnDrop for Player vs CPU
    onDrop2 = (ev, cat, cat2) => {
        //Dont need to check whose move because this will go for the CPU
        if (this.state.player1Moves >= this.state.n) {
            return;
        }

        let id = ev.dataTransfer.getData("id");
        var s;
        var s2;
        let tasks = this.state.tasks.filter((task) => {
            if (task.id == id) {
                task.category = cat;
                s = task.name;
                this.state.available[id] = 1;   //Set it to 1 = taken
                this.state.player1Moves++;
                this.state.p1 = 0;
            }
            if (this.state.p1 === 0) {
                if (this.state.available[task.id] === 0) {
                    //CPU Move
                    this.state.p1 = 1;
                    this.state.player2Moves++;
                    this.state.available[task.id] = 1;
                    task.category = cat2;
                    s2 = task.name;
                }
            }
            return task;
        });
        this.state.player1Sum = this.state.player1Sum + s;
        this.state.player2Sum = this.state.player2Sum + s2;
        this.setState({
            ...this.state,
            tasks
        });

        if (this.state.player1Sum == this.state.target) {   //If the player's sum matches target
            this.state.endGame = true;
            this.state.winner = "Player 1"
        }

        if (this.state.player2Sum == this.state.target) {   //If the player's sum matches target
        this.state.endGame = true;
        this.state.winner = "CPU"
        }
    }

    //OnDrop specifically for Player 1 in PvP
    onDropP1 = (ev, cat) => {
        //Check if current player
        if (this.state.p1 === 1) {
            this.state.p1 = 0;  //Switch turns
            this.state.p2 = 1;
            //Check if possible to make another selection
            if (this.state.player1Moves >= this.state.n) {
                return;
            }
            let id = ev.dataTransfer.getData("id");
            var s;
            let tasks = this.state.tasks.filter((task) => {
                if (task.id == id) {
                    task.category = cat;
                    s = task.name;
                    this.state.player1Moves++;  //Made selection so count it
                }
                return task;
            });
            this.state.player1Sum = this.state.player1Sum + s;  //Add the selected number to the sum for the player
            var div1 = document.getElementsByClassName("player1")
            div1[0].style.backgroundColor = '#1b2b8c';

            var div2 = document.getElementsByClassName("player2")
            div2[0].style.backgroundColor = '#3CED1C';
            this.setState({
                ...this.state,
                tasks
            });

            if (this.state.player1Sum == this.state.target) {   //If the player's sum matches target
                this.setState({
                    winner: "Player 1",
                    endGame: true
                })
            }
        } else {
            return;
        }
        
     }

    //OnDrop specifically for Player 2 in PvP
    onDropP2 = (ev, cat) => {
        if (this.state.p2 === 1) {
            this.state.p1 = 1;
            this.state.p2 = 0;
            if (this.state.player2Moves >= this.state.n) {
                return;
            }
            let id = ev.dataTransfer.getData("id");
            var s;
            let tasks = this.state.tasks.filter((task) => {
                if (task.id == id) {
                    task.category = cat;
                    s = task.name;
                    this.state.player2Moves++;
                }
                return task;
            });
            this.state.player2Sum = this.state.player2Sum + s;
            var div1 = document.getElementsByClassName("player1")
            div1[0].style.backgroundColor = '#FBFF11';

            var div2 = document.getElementsByClassName("player2")
            div2[0].style.backgroundColor = '#1b2b8c';
            this.setState({
                ...this.state,
                tasks
            });

            if (this.state.player2Sum == this.state.target) {
                this.setState({
                    winner: "Player 2",
                    endGame: true
                })
            }
        } else {
            return;
        }
    }

    onClick = (e) => {
        if (e.button === 0) {
            return;
        } else if (e.button === 2) {
            var number = e.target.innerHTML;
            var msg = new SpeechSynthesisUtterance();
            msg.text = number;
            if (!this.state.muted)
                window.speechSynthesis.speak(msg);
        }
    }

    highlightDifficulty(e) {
        e.target.src = difficultyHighlighted;
    }

    unhighlightDifficulty(e) {
        e.target.src = difficultyButton;
    }

    highlightAudio(e) {
        if (e.target.src === audioOnButton)
            e.target.src = audioOnHighlighted;
        if (e.target.src === audioOffButton)
            e.target.src = audioOffHighlighted;
    }

    unhighlightAudio(e) {
        if (e.target.src === audioOnHighlighted)
            e.target.src = audioOnButton;
        if (e.target.src === audioOffHighlighted)
            e.target.src = audioOffButton;
    }

    muteAudio(e) {
        if (e.target.src === audioOffButton || e.target.src === audioOffHighlighted) {
            e.target.src = audioOnButton
            this.state.muted = 0;
        } else {
            e.target.src = audioOffButton;
            this.state.muted = 1;
        }

    }

    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            gamescreen: false,
            helpScreen: true,
            });
    }

    showHintP1(e, sum) {
        e.target.outerHTML = "<div>Sum on Turn " + this.state.player1Moves + ": " + sum + "</div>";
    }

    showHintP2(e, sum) {
        e.target.outerHTML = "<div>Sum on Turn " + this.state.player2Moves + ": " + sum + "</div>";
    }

    showOptions(){
        this.setState({
            showOptions: true,
            display: false
        })
    }

    newGame() {
        this.setState({
            newGame: true
        })
    }

    render() {
        const preventDefault = (e) => { e.preventDefault() }

        const players = this.state.players;
        const n = this.state.n;
        var tasks = {
            board: [],
            p1: [],
            p2: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.id} 
                    onDragStart = {(e) => this.onDragStart(e, t.id)}
                    onContextMenu={preventDefault}
                    onMouseDown = {(e) => this.onClick(e)}
                    draggable
                    className="draggable"
                    style = {{backgroundImage: `url(${droplet})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: "#2196F3",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white'}}
                >
                    {t.name}
                </div>
            );
        });

        
        const myStyle = {
            display: 'inline-grid',
            gridTemplateColumns: '20% auto 20%',
            gridTemplateRows: '100px 1fr',
            gridColumnGap: '20px',
            backgroundColor: '#2196F3',
            marginLeft: '10%',
            marginTop: '5%',
            //transform: 'translateX(-50%)',
            height: '80vh',
            width: '80vw',
            position: 'absolute',
            justifyContent: 'stretch',
            border: '5px solid black',
            borderRadius: '10px'
        };

        const board3 = {
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gridColumnGap: '20px',
            gridRowGap: '20px',
            marginBottom: '1%',
            textAlign: 'center',
            verticalAlign: 'middle',
            gridColumnStart: '2',
            gridColumnEnd: '3',
            gridRowStart: '2',
            gridRowEnd: '3',
            //border: '0.5px solid black'
        }
        
        const board4 = {
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gridColumnGap: '20px',
            gridRowGap: '20px',
            textAlign: 'center',
            verticalAlign: 'middle',
            gridColumnStart: '2',
            gridColumnEnd: '3',
            gridRowStart: '2',
            gridRowEnd: '3',
            border: '0.5px solid black'
        }

        const title = {
            fontSize: '40px' ,
            textAlign: 'center',
            gridColumnStart: '2',
            gridColumnEnd: '3',
            padding: '0px',
            margin: '0px',
        }

        const subTitle = {
            fontSize: '30px',
            textAlign: 'center',
            gridRowStart: '1',
            gridRowEnd: '1',
            padding: '0px 0px 20px 0px'
        }

        const player1Style={
            display: 'inline-grid',
            gridTemplateColumns: '1',
            gridTemplateRows: '1',
            gridColumnStart: '1',
            gridColumnEnd: '2',
            gridRowStart: '1',
            gridRowEnd: '3',
            backgroundColor: "#FBFF11",
            borderRight: '5px solid black'
        }

        const fillLineStyle={
            gridRowStart: '1',
            gridRowEnd: '2',
            borderBottom: '2px solid black'
        }

        const player2Style={
            display: 'inline-grid',
            gridTemplateColumns: '1',
            gridTemplateRows: '1',
            gridColumnStart: '3',
            gridColumnEnd: '4',
            gridRowStart: '1',
            gridRowEnd: '3',
            backgroundColor: "#1b2b8c",
            borderLeft: '5px solid black'
        }

        const helpButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '5%',
            height: 'auto', 
            bottom: '2.6%',
            right: '1.3%'
        }

        const hintButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '3%',
            height: 'auto', 
            top: '1%',
            left: '1%'
        }
        
        const hint2ButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '3%',
            height: 'auto', 
            top: '1%',
            right: '1%'
        }

        const difficultyButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto', 
            bottom: '2.6%',
            left: '1.3%'
        }

        const newGameButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '5%',
            height: '9%', 
            top: '2%',
            left: '1.3%'
        }

        const audioButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            top: '2%',
            right: '1.3%'
        }

        if (this.state.showOptions) {
            if (this.props.inGame) {
                return <GameFunctions />
            } else {
                return <Options players={this.state.players}/>
            };
        };

        if (this.state.helpScreen){
            return <Help returnScreen={'game'} n={this.state.n} difficulty={this.state.difficulty} players={this.state.players}/>
        }

        if (this.state.endGame) {
            return <EndGame winner={this.state.winner}/>
        }

        if (this.state.newGame) {
            return <GameFunctions difficulty={this.state.difficulty} n={this.state.n**2} players={this.state.players} />
        }
        
        return (
            <div>
                <div style={myStyle}>
                    <h2 className="header" style={title}>Target Sum {this.state.target}</h2>

                    {n === 3 ? (<div className="board" style={board3}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "board")}}>
                        {tasks.board}
                    </div>) : (
                        <div className="board" style={board4}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "board")}}>
                        {tasks.board}
                    </div>)}

                    {players === 1 && <> <div className="player1" style={player1Style}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop2(e, "p1", "p2")}>
                        <div className="task-header" style={subTitle}>
                            <input style={hintButtonStyle} onClick={(e) => this.showHintP1(e, this.state.player1Sum)}  type="image" src={hint} name="hintbutton"/>
                            Player</div>
                        {tasks.p1}
                    </div><div className="CPU" style={player2Style}>
                        <div className="task-header" style={subTitle}>CPU</div>
                        {tasks.p2}
                    </div></>}

                    {players === 2 && <> <div className="player1" style={player1Style}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDropP1(e, "p1")}>
                        <div className="task-header" style={subTitle}>
                            <input style={hintButtonStyle} onClick={(e) => this.showHintP1(e, this.state.player1Sum)}  type="image" src={hint} name="hintbutton"/>
                            Player 1
                        </div>
                        {tasks.p1}
                    </div><div className="player2" style={player2Style}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDropP2(e, "p2")}>
                        <div className="task-header" style={subTitle}>
                            <input style={hint2ButtonStyle} onClick={(e) => this.showHintP2(e, this.state.player2Sum)}  type="image" src={hint} name="hintbutton"/>
                            Player 2</div>
                        {tasks.p2}
                    </div></>}
                </div>
                {/* <input onClick={this.goBack} style={backButtonStyle} src={back} type="image"  name="backbutton"/> */}
                {<input onClick={(e) => this.muteAudio(e)} onMouseEnter={(e) => this.highlightAudio(e)} onMouseLeave={(e) => this.unhighlightAudio(e)} 
                    style={audioButtonStyle} type="image" src={audioOnButton} name="audioButton"/>}
                <input style={helpButtonStyle} onClick={this.showHelp}  type="image" src={help} name="helpbutton"/>
                <input onClick={this.showOptions} onMouseEnter={(e) => this.highlightDifficulty(e)} onMouseLeave={(e) => this.unhighlightDifficulty(e)}
                    style={difficultyButtonStyle} type="image" src={difficultyButton} name="difficultyButton"/>
                <input onClick={() => this.newGame()} style={newGameButtonStyle} type="image" src={newGameButton} name="newGameButton"/>
            </div>
        )
    }
}

export default GameFunctions;
