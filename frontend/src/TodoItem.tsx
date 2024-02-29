import {
    useCreateItemMutation,
    useDeleteItemMutation,
    useGetItemQuery,
    usePutItemMutation
} from "./graphql/generated/graphql";
import './App.css'
import React, {useEffect, useState} from "react";
import {TodoItem} from "./App";

const GetTodoItem = () => {

    const [items, setItems] = useState<any>([])
    const [removeItem] = useDeleteItemMutation()
    const [createItem] = useCreateItemMutation()
    const [putItem] = usePutItemMutation()
    const [item, setItem] = useState("");
    const {data, loading, refetch} = useGetItemQuery()

    useEffect(() => {
        if (loading) {
            console.log(loading)
        } else {
            setItems(data?.getItem)
        }
    }, [data, loading, items]);

    function changeIsDone(isDone: boolean, uuid: string) {
        isDone = !isDone
        putItem({variables: {uuid: uuid, isDone: isDone}}).then(r =>
            refetch()
        )
    }

    function deleteItem(uuid: string) {
        removeItem({variables: {uuid: uuid}}).then(r =>
            refetch()
        )
    }

    function createTodoItem() {
        createItem({variables: {item: item}}).then(r =>
            refetch()
        ).catch()
    }

    return (
        <>{
            loading ? <div className="center"> <img src="https://static-00.iconduck.com/assets.00/spinner-icon-2048x2048-mhj15xft.png" className="App-logo img"/> </div> :
                <div className="center">
                    {items.map((item: any, index: number) => {
                        return (
                            <div key={index} className="table">
                                <div className="div1">
                                    <div>
                                        <input type="checkbox" className="input"
                                               onClick={() => changeIsDone(item?.isDone, item.uuid)}
                                               id={item?.uuid} checked={item?.isDone}></input>
                                        <label htmlFor={item?.uuid} className="label">{item?.item}</label>
                                    </div>
                                    <input onClick={() => deleteItem(item?.uuid)} type="button" className="deleteBtn"
                                           value="Löschen"></input>

                                </div>

                                <hr/>
                            </div>
                        )
                    })}
                    <h1 className="headline">Neuer Artikel</h1>
                    <input onKeyDown={event => {
                        if (event.key == 'Enter') {
                           createTodoItem()
                        }
                    }}
                           onChange={event => {
                               setItem(event.target.value)
                           }}
                           id="demo" className="textbar" type="text" placeholder="Neuer Artikel eingeben" value={item}/>
                    <input type="button" onClick={createTodoItem} className="btn" value="Hinzufügen"></input>
                </div>
        }
        </>

    )
}

export default GetTodoItem;