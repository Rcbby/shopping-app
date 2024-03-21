import React, {Dispatch, SetStateAction} from "react";
import style from './TodoList.module.css'
import {TodoItem} from "../TodoItem/TodoItem";

export const TodoList = (props: TodoItemAndNumber) => {


    function handleChange(isDone: boolean, uuid: string) {
        fetch(`http://localhost:8080/todolist/${!isDone}/${uuid}`, {method: "PUT"})
            .then(res => res.json())
            .then(data => props.setState(props.items.map(item =>
                item.uuid == data.uuid ? {...item, isDone: data.isDone} : item)))
            .catch(error => console.error(`error: ${error}`))
    }


    function handleDelete(uuid: string) {
        fetch(`http://localhost:8080/todolist/${uuid}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => props.setState(props.items.filter(item => item.uuid !== data.uuid)))
            .catch(error => console.error(`error: ${error}`))
    }

    return (
        <>
            <div className={style.grid} key={props.index}>
                <div className={style.todo}>
                    <input className={style.checkbox} type="checkbox"
                           onClick={() => handleChange(props.isDone, props.uuid)}
                           id={props.uuid} checked={props.isDone}></input>
                    <label htmlFor={props.uuid}>{props.item}</label>
                </div>
                <div className={style.flexend}>
                    <input className={style.deleteBtn} onClick={() => handleDelete(props.uuid)} type="button"
                           value="Löschen"></input>
                </div>
                <div className={style.hr}>
                    <hr/>
                </div>
            </div>
        </>
    )
}

interface TodoItemAndNumber {
    item: string;
    isDone: boolean;
    uuid: string;
    index: number;
    items: TodoItem[];
    setState: Dispatch<SetStateAction<TodoItem[]>>;
}