import './TodoListTable.css';
import React, {useEffect, useState} from "react";

const TodoListTable = () => {

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
        return <h1>Loading.......</h1>
    }
    return <>
        <div className="center">
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <input type="checkbox" id={index.toString()} />
                        <label htmlFor={index.toString()}>{item.item}</label>
                        <input type="button" className="deleteBtn" value="Delete"></input>
                    </div>
                )
            })}
        </div>
    </>
}
interface TodoItem{uuid: String, item: String, isDone: Boolean}
export default TodoListTable;