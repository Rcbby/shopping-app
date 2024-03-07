import './styles/App.css';
import React, {useEffect, useState} from "react";

const App = () => {

    const [items, setItems] = useState<TodoItem[]>([]);
    const [initStartup, setInitStartup] = useState(true);
    const [item, setItem] = useState("")

    useEffect(() => {
        fetch('http://localhost:8080/todolist')
            .then(res => res.json())
            .then(data => setItems(data))
            .then(() => setInitStartup(false))
            .catch(error => console.error('Error fetching items: ', error))
    }, []);

    if (initStartup) {
    }

    function handleCheck(isDone: boolean, uuid: String) {
        fetch(`http://localhost:8080/todolist/${!isDone}/${uuid}`, {method: "PUT"})
            .then(response => response.json())
            .then(data => setItems(items.map(item =>
                    item.uuid == data.uuid ? {...item, isDone: data.isDone} : item
                ))
            )
            .catch(error => console.error(`there was an error: ${error}`))
    }

    function deleteItem(uuid: String) {
        fetch(`http://localhost:8080/todolist/${uuid}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => setItems(items.filter(item => item.uuid !== data.uuid)))
            .catch(error => console.error(`there was an error: ${error}`))
    }



    const createItem = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({item})
        }
        if (item != "") {
            fetch('http://localhost:8080/todolist', requestOptions)
                .then(response => response.json())
                .then(data => setItems(() => [...items, data]))
                .catch(error => console.error(`There was an unexpected error: ${error}`))
            setItem("")
        }
    }

    return <>
        <div className="center">
            {items.map((item, index) => {
                return (
                    <div key={index} className="table">
                        <input className="input" onClick={() => handleCheck(item.isDone, item.uuid)} type="checkbox"
                               id={item.uuid.toString()} checked={item.isDone}/>
                        <label className="label" htmlFor={item.uuid.toString()}>{item.item}</label>
                        <input onClick={() => deleteItem(item.uuid)} type="button" className="deleteBtn"
                               value="Löschen"></input>
                        <hr></hr>
                    </div>
                )
            })}
            <h1 className="headline">Neuer Artikel</h1>
            <div className="flex-between">
                <input onKeyDown={event => {
                    if (event.key == 'Enter') {
                        createItem()
                    }
                }} onChange={event => {
                    setItem(event.target.value)
                }} id="demo" className="textbar" type="text" placeholder="Neuer Artikel eingeben" value={item}/>
                <input type="button" onClick={createItem} className="btn" value="Hinzufügen"></input>
            </div>
        </div>
    </>
}

export interface TodoItem {
    uuid: string,
    item: string,
    isDone: boolean
}

export default App;
