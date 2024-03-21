import React, {useEffect, useState} from "react";
import {CreateTodoItem} from "../CreateItem/CreateTodoItem";
import {TodoList} from "../TodoList/TodoList";


const GetTodoItem = () => {

    const [items, setItems] = useState<TodoItem[]>([]);
    const [initStartup, setInitStartup] = useState(true);

    useEffect(() => {
            fetch('http://localhost:8080/todolist', {method: 'GET'})
                .then(res => res.json())
                .then(data => setItems(data))
                .then(() => setInitStartup(false))
                .catch(error => console.error('Error fetching items: ', error))
    }, []);

    return (
        <>
            {
                initStartup ? <div>
                        <img alt="loading"
                             src="https://static-00.iconduck.com/assets.00/spinner-icon-2048x2048-mhj15xft.png"
                        /></div> :
                    <div>
                        {items.map((item: TodoItem, index: number) => {
                            return (
                                <TodoList item={item.item} isDone={item.isDone} uuid={item.uuid} index={index}
                                          key={index} items={items} setState={setItems}/>
                            )
                        })}
                    </div>
            }
            <CreateTodoItem items={items} setState={setItems}/>
        </>
    )
}

export interface TodoItem {
    item: string;
    isDone: boolean;
    uuid: string;
}

export default GetTodoItem;