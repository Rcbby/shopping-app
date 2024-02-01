import './App.css';
import React, {useEffect, useState} from "react";
import {randomUUID} from "crypto";


const App = () => {

    const [items, setItems] = useState<TodoItem[]>([]);
    const [initStartup, setInitStartup] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/todolist')
            .then(res => res.json())
            .then(data => setItems(data))
            .then(() => setInitStartup(false))
            .catch(error => console.error('Error fetching items: ', error))
    }, []);


    if (initStartup) {
    }

    /*
    function setItems()

    */

    function handleCheck(isDone: boolean, uuid: String) {
        fetch(`http://localhost:8080/todolist/${!isDone}/${uuid}`, {method: "PUT"})
            .then(response => response.json())
            .then(data => setItems(items.map((item) => {
                if (item.uuid == data.uuid) {
                    item.isDone = data.isDone
                    return item
                } else {
                    return item
                }
            })))
            .then(res => console.log(res))
    }

    function deleteItem(uuid: String) {
        fetch(`http://localhost:8080/todolist/${uuid}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => setItems(items.filter(item => { if (item.uuid !== data.uuid) {return item} })))
    }

    //todo Higher-order-functions / currying

    return <>
        <div className="center">
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <input onClick={() => handleCheck(item.isDone, item.uuid)} type="checkbox"
                               id={item.uuid.toString()} checked={item.isDone}/>
                        <label htmlFor={item.uuid.toString()}>{item.item}</label>
                        <input onClick={()=>deleteItem(item.uuid)} type="button" className="deleteBtn" value="Delete"></input>
                    </div>
                )
            })}
        </div>
    </>
}

interface TodoItem {
    uuid: String,
    item: String,
    isDone: boolean
}

export default App;