import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
    const [count, setCount] = useState(0);

    function setClick() {
        setCount(count + 1)
    }

    return (
        <div className="App App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <button className="btn" onClick={setClick}>Clicked {count} times</button>
        </div>
    );
}
