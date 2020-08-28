import React from 'react';

import './App.css';





const CELL_SIZE = 32;

const WIDTH = 800;

const HEIGHT = 800;




class Game extends React.Component {


        constructor() { 
            super();
            this.rows = HEIGHT / CELL_SIZE;
            this.cols = WIDTH / CELL_SIZE;
            

        }
        


        render() {
            return(
                <div>
                    <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}></div>
                    <div className="ButtonRow">
                        <button>Start</button>
                        <button>Pause</button>
                        <button>Clear</button>
                    </div>
                </div>
                
        
            );
        }

}


export default Game;




