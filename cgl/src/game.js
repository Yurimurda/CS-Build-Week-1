import React from 'react';

import './App.css';





const CELL_SIZE = 32;



// 800 x 800 Gives 25 x 25 Rows and Cols
const WIDTH = 800;

const HEIGHT = 800;




class Game extends React.Component {

    state = {cells: [], interval: 100, isRunning: false}

    startGame = () => {    this.setState({ isRunning: true});  }

    stopGame = () => {    this.setState({ isRunning: false });  }

    intervalChange = (event) => {    this.setState({ interval: event.target.value });  }


        constructor() { 
            super();
            this.rows = HEIGHT / CELL_SIZE;
            this.cols = WIDTH / CELL_SIZE;
            this.board = this.makeBoard();
        }

        makeBoard(){
            let board = [];
            for (let y = 0; y < this.rows; y++){
                board[y] = [];
                for (let x = 0; x < this.cols; x++){
                    board[y][x] = false;
                    return board;
                }
                
            }
            return board;
        }

        makeCells() {
            let cells = [];
            for (let y = 0; y < this.rows; y++){
                for (let x = 0; x < this.cols; x++){
                    if (this.board[y][x]){
                        cells.push({ x, y });
                    }
                }
                return cells;
            }
        }

        render() {
            return(
                <div>
                    <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}></div>
                    <div className="ButtonRow">
                        <input value={this.state.interval} onChange={this.intervalChange}/>
                        <button className="Button" onClick={this.startGame}>Start</button>
                        <button className="Button" onClick={this.stopGame}>Pause</button>
                        <button>Clear</button>
                    </div>
                </div>
                
        
            );
        }

}


export default Game;




