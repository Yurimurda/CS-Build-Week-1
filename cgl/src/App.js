import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';

function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">

        <h1>Welcome to Conway's Game of Life! </h1>
        <Game/>
      </header>
    </div>
  );
}

export default App;
