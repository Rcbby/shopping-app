import {useGetItemQuery} from "../../graphql/generated/graphql";
import React, {useEffect, useState} from "react";
import {CreateTodoItem} from "../CreateItem/CreateTodoItem";
import {TodoList} from "../TodoList/TodoList";


const GetTodoItem = () => {

    const [items, setItems] = useState<any>([]);
    const {data, loading} = useGetItemQuery();

    useEffect(() => {
        loading ? console.log(loading) : setItems(data?.getItem);
    }, [data, items]);

    return (
        <>
            {
                loading ? <div>
                        <img alt="loading"
                             src="https://static-00.iconduck.com/assets.00/spinner-icon-2048x2048-mhj15xft.png"
                        /></div> :
                    <div>
                        {items.map((item: TodoItem, index: number) => {
                            return (
                                <TodoList item={item.item} isDone={item.isDone} uuid={item.uuid} index={index} key={index}/>
                            )
                        })}
                    </div>
            }
            <CreateTodoItem/>
        </>
    )
}

export interface TodoItem {
    item: string;
    isDone: boolean;
    uuid: string;
}

export default GetTodoItem;