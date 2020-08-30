import React from 'react';

import './App.css';





const CELL_SIZE = 32;



// 800 x 800 Gives 25 x 25 Rows and Cols
const WIDTH = 800;

const HEIGHT = 800;



class Cell extends React.Component {
    render() {
        const { x, y} = this.props;
        return(
            <div className="Cell" style={{
                top: `${CELL_SIZE * y + 1}px`,
                left: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE * x - 1}px`,
                height: `${CELL_SIZE * x - 1}px`
            }} />

        )
    }
}





class Game extends React.Component {

    state = {
        cells: [],
        interval: 10, 
        isRunning: false
    }


    constructor() { 
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeCleanBoard();
        
    }

    startGame = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 3.5);
            }
        }
        this.setState({ cells: this.makeCells() });
    }

    stopGame = () => { 
        this.setState({ isRunning: false });
    if (this.timeoutHandler) { window.clearTimeout(this.timeoutHandler); 
        this.timeoutHandler = null }  
    }

    intervalChange = (event) => { 
        this.setState({ interval: event.target.value }); 
    }
    
    runIteration = () => { 
        let newBoard = this.makeCleanBoard(); 
        this.board = newBoard; 
        this.setState({ cells:this.makeCells() });
        this.timeoutHandler = window.setTimeout(() => { this.runIteration(); }, 
        this.state.interval)

        for (let y=0; y< this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let cellMates = this.cellRules(this.board, x, y);
                if (this.board[y][x]) { 
                    if (cellMates === 2 || cellMates === 3) {
                        newBoard[x][y] = true; } else {
                            newBoard[x][y] = false
                        }
                    } else {
                        if (!this.board[y][x] && cellMates === 3) {
                            newBoard[x][y] = true;
                        }
                    }
            }
        }
    }

    getElementOffSet() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop
        }
    }


    

        makeCleanBoard(){
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

        

        cellRules(board, x, y) {
            let cellMates = 0;
            const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

            for (let i = 0; i < dirs.length; i++) {
                const dir = dirs[i];
                let y1 = y + dir[0];
                let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                cellMates++;
                }
            }
            return cellMates
        }

        render() {
            const { cells } = this.state; 
            return(
                <div>
                    <div className="ButtonRow">
                        <input value={this.state.interval} onChange={this.intervalChange}/>
                        <button className="Button" onClick={this.startGame}>Start</button>
                        <button className="Button" onClick={this.stopGame}>Pause</button>
                        <button>Clear</button>
                    </div>
                    <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    ref={(n) => { this.boardRef = n}}>
                        {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                        ))}
                    </div>
                </div>
                
        
            );
        }

}


export default Game;




