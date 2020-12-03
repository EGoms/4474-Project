import React from 'react';
import Options from '../containers/Options.js';
import droplet from '../images/droplet.png';
import back from '../images/back_arrow.png';

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


class GameFunctions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
            ],
            target: 0,
            players: props.players,
            n: Math.sqrt(props.n),
            difficulty: props.difficulty,
            player1Sum: 0,
            player2Sum: 0,
            player1Moves: 0,
            player2Moves: 0
        };
        this.goBack = this.goBack.bind(this);
        console.log("Difficulty", this.state.difficulty);
        console.log("Number of players", this.state.players);
        console.log("Number", this.state.n);
        const COLORS = [
            'red',
            'green',
            'blue',
            'yellow',
            'cyan',
          ];
        var values = logic(this.state);
        var nums = values[0];
        var targetSum = values[1];
        this.state.target = targetSum;
        var i = 0;
        for (i = 0; i < nums.length; i++) {
            this.state.tasks.push({id: i,
                 name: nums[i], 
                 category: "board", 
                 bgcolor: COLORS[Math.floor(Math.random() * COLORS.length)]})
        }
    };

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

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

    onDropP1 = (ev, cat) => {
        //Check if possible to make another selection
        if (this.state.player1Moves >= this.state.n) {
            alert("Already made maximum moves", this.state.n);
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
        this.state.player1Sum = this.state.player1Sum + s;  //Add the selecred number to the sum for the player
        this.setState({
            ...this.state,
            tasks
        });

        if (this.state.player1Sum == this.state.target) {   //If the player's sum matches target
            alert("Player 1 Wins"); //Change to render new screen
        }
     }

     onDropP2 = (ev, cat) => {
        if (this.state.player2Moves >= this.state.n) {
            alert("Already made maximum moves", this.state.n);
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
        this.setState({
            ...this.state,
            tasks
        });

        if (this.state.player2Sum == this.state.target) {
            alert("Player 2 Wins");
        }
     }


    goBack(){
        this.setState({
            goBack: true,
            display: false
        })
    }


    render() {
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
                    draggable
                    className="draggable"
                    style = {{backgroundImage: `url(${droplet})`,
                        border: '1px solid black',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
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
        };

        const subTitle = {
            fontSize: '30px',
            textAlign: 'center',
            padding: '0px 0px 20px 0px'
        };

        const player1Style={
            gridColumnStart: '1',
            gridColumnEnd: '2',
            gridRowStart: '1',
            gridRowEnd: '3',
            backgroundColor: "white",
            borderRight: '5px solid black'
        }

        const player2Style={
            gridColumnStart: '3',
            gridColumnEnd: '4',
            gridRowStart: '1',
            gridRowEnd: '3',
            backgroundColor: "white",
            borderLeft: '5px solid black'
        }

        const backButtonStyle = {
            display: 'block',
            //float: 'left',
            position: 'absolute',
            width: '4%',
            height: 'auto',
            bottom: '2%',
            left: '1%'
        }

        if (this.state.goBack)
        {
            if (this.props.inGame)
            {
                return <GameFunctions />
            }
            else
            {
                return <Options />
            };
        };
        
        return (
            <div>
                <div style={myStyle}>
                    <div className="player1" style={player1Style}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDropP1(e, "p1")}>
                        <div className="task-header" style={subTitle}>Player 1</div>
                        {tasks.p1}
                        {this.state.player1Sum}
                    </div>
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
                    
                    <div className="player2" style={player2Style}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDropP2(e, "p2")}>
                        <div className="task-header" style={subTitle}>Player 2</div>
                        {tasks.p2}
                        {this.state.player2Sum}
                    </div>
                </div>
                <input onClick={this.goBack} style={backButtonStyle} src={back} type="image"  name="backbutton"/>
            </div>
        )
    }
}

export default GameFunctions;
