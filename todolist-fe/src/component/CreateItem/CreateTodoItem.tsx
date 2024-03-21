import React, {Dispatch, SetStateAction, useState} from "react";
import style from './CreateTodoItem.module.css'
import {TodoItem} from "../TodoItem/TodoItem";

export const CreateTodoItem = (props: CreateTodoItem) => {
    const [item, setItem] = useState('');


    function createTodoItem() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({item})
        }

        if (item !== "" && item !== null) {
            fetch('http://localhost:8080/todolist', requestOptions)
                .then(res => res.json())
                .then(data => props.setState(() => [...props.items, data]))
                .catch(error => console.error(`error: ${error}`))
            setItem("");
        }
    }

    return (
        <>
            <div className={style.grid}>
                <h1 className={style.headline}>Neuer Artikel</h1>
                <input className={style.textbar} onKeyDown={event => {
                    if (event.key == 'Enter') {
                        createTodoItem()
                        setItem("")
                    }
                }}
                       onChange={event => {
                           setItem(event.target.value)
                       }}
                       id="demo" type="text" placeholder="Neuer Artikel eingeben"
                       value={item}/>
                <div>
                    <input className={style.btn} type="button" onClick={createTodoItem}
                           value="Hinzufügen"></input>
                </div>
            </div>
        </>
    )
}

interface CreateTodoItem {
    items: TodoItem[];
    setState: Dispatch<SetStateAction<TodoItem[]>>;
}