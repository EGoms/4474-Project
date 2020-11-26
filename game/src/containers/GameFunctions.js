import React from 'react';

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

    /**
     * Logic to build the game
     * @param {*} n - Should be user supplied either 3 or 4. Controls game size 
     * @param {*} fn - Function for what kind of numbers to choose (getWholeNumber / getDecimalNumber)
     */
function logic(n, fn) {
        let nums = [];  //Populate the numbers for the grid
        for (let i = 0; i < n**2; i++) {    //n = 3,4 so numbers 1-9 or 16
            nums.push(fn(1, n**2));  //todo move the function
        }
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

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    console.log("Dropping");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}

export function AddTable2(props) {
    if (x == 0) {
        var values = logic(props.n, getWholeNumber);
        var nums = values[0];
        var targetSum = values[1];
        if (props.n == 3) {
            return (<table border="1">
                <tbody>
                    <tr>
                        <td rowSpan={props.n + 1} width="75" onDrop={drop} onDragOver={allowDrop}>Player 1</td>
                    </tr>
                    <tr>
                        <td id="1" width="75" draggable="true" onDragStart={drag}>1</td>
                        <td id="2" width="75" draggable="true">2</td>    
                        <td id="2" width="75" draggable="true">3</td>
                        <td id="test" rowSpan="4" width="75">Player 2</td>        
                    </tr>
                    <tr>
                        <td id="2" width="75" draggable="true">4</td>
                        <td id="2" width="75" draggable="true">5</td>    
                        <td id="2" width="75" draggable="true">6</td>        
                    </tr>
                    <tr>
                        <td id="2" width="75" draggable="true">7</td>
                        <td id="2" width="75" draggable="true">8</td>    
                        <td id="2" width="75" draggable="true">9</td>        
                    </tr>
                </tbody>
                </table>
                )
        }

        x++;
    }
}

export function AddTable(props) {
    if (x === 0) {
        var values = logic(props.n, getWholeNumber);
        var nums = values[0];
        var targetSum = values[1];
        var container = document.getElementById("root");
        
        var div = document.createElement("div");
        div.innerHTML = targetSum;
        div.style.position = "absolute";
        div.style.top = "35%";
        div.style.left = "50%";
        container.append(div);

        var div2 = document.createElement("div");
        div2.style.position = "absolute";
        div2.style.top = "50%";
        div2.style.left = "45%";

        var table;
        if (document.getElementById("table")) {
            table = document.getElementById("table");
        } else {
            table = document.createElement("table");
        }
        table.border=1;

        var tableBody = document.createElement("TBODY");
        table.appendChild(tableBody);


        var tr1 = document.createElement('TR');
        var td1 = document.createElement('TD');
        tableBody.appendChild(tr1);
        tr1.appendChild(td1);
        td1.setAttribute('rowspan', props.n+1);
        td1.addEventListener("dragover", allowDrop);
        td1.addEventListener("drop", drop);
        td1.width='75';

        var c = 0;
        for (var i = 0; i < props.n; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (var j = 0; j < props.n; j++, c++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(nums[c]));
                td.setAttribute('draggable', 'true');
                td.addEventListener('dragstart', drag)
                tr.appendChild(td);
                if (c == 9) {
                    var td2 = document.createElement('TD');
                    td2.setAttribute('rowspan', props.n+1);
                    td2.width='75';
                    tr.appendChild(td2);
                }
            }
        }

        div2.appendChild(table);
        container.append(div2);
        x = 1;
    }
}

//TODO: Create table of drag and droppable objects

class GameFunctions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
       
    //    let tasks = this.state.tasks.filter((task) => {
    //        if (task.name == id) {
    //            task.category = cat;
    //        }
    //        return task;
    //    });

    //    this.setState({
    //        ...this.state,
    //        tasks
    //    });
    }

    render() {
        return ( 
            <div>
                <AddTable2 n={3}/>
            </div>
        )
    }
}

export default GameFunctions;