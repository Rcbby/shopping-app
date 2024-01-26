import './App.css';
import React, {useEffect, useState} from "react";

const App = () => {

    const [items, setItems] = useState<any[]>([]);
    const [initStartup, setInitStartup] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/todolist')
            .then(res => res.json())
            .then(data => setItems(data))
            .then(() => setInitStartup(false))
            .catch(error => console.error('Error fetching items: ', error))
    }, []);

    if (initStartup) {
        return <h1>Loading.......</h1>
    }
    return <>
        <div className="App">
    {items.map((item, index) => {
        return (
            <div key={index} >
                <h3>{item.item}</h3>
            </div>
        )
    })}
        </div>
    </>
}

export default App