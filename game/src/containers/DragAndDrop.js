import React from 'react';

class DragAndDrop extends React.Component {
    state = {

        tasks: [
            {name:"Learn Angular",category:"board", bgcolor: "yellow"},
            {name:"React", category:"board", bgcolor:"pink"},
            {name:"Vue", category:"p1", bgcolor:"skyblue"}
          ]
    }



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
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            board: [],
            p1: [],
            p2: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="board"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "board")}}>
                    <span className="task-header">BOARD</span>
                    {tasks.board}
                </div>
                <div className="player1" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "p1")}>
                     <span className="task-header">Player 1</span>
                     {tasks.p1}
                </div>
                <div className="player2" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "p2")}>
                     <span className="task-header">Player 2</span>
                     {tasks.p2}
                </div>


            </div>
        );
    }
}

export default DragAndDrop;
