import React from 'react';
import logo from './logo.svg';
import './App.css';

const randomNumber = Math.floor(Math.random() * 10 + 1)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="gross">
                    React
                </p> <br/>
                <p>
                    {randomNumber}
                </p>
            </header>
        </div>
    );
}

export default App;
