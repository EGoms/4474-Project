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
        let n1 = n;
        //let n1 = n['n'];
        for (let i = 0; i < n1**2; i++) {    //n = 3,4 so numbers 1-9 or 16
            nums.push(fn(1, n1**2));  //todo move the function
        }
        let combinations = k_combinations(nums, n1);
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


export function AddTable(n) {
    var n1 = n;
    //var n1 = n.valueOf()['n'];
    if (x === 0) {
        var values = logic(n, getWholeNumber);
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
        var c = 0;
        for (var i = 0; i < n1; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (var j = 0; j < n1; j++, c++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(nums[c]));
                tr.appendChild(td);
            }
        }
        div2.appendChild(table);
        container.append(div2);
        x = 1;
    }
}

class GameFunctions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return ( 
            <div>
                <AddTable n={3}/>
            </div>
        )
    }
}

export default GameFunctions;