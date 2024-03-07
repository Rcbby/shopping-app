import {
    useCreateItemMutation,
    useDeleteItemMutation,
    useGetItemQuery,
    usePutItemMutation
} from "./graphql/generated/graphql";
import './styles/App.css'
import React, {useEffect, useState} from "react";

const GetTodoItem = () => {

    const [items, setItems] = useState<any>([])
    const [removeItem] = useDeleteItemMutation()
    const [createItem] = useCreateItemMutation()
    const [putItem] = usePutItemMutation()
    const [item, setItem] = useState("");
    const {data, loading, refetch} = useGetItemQuery()

    useEffect(() => {
        loading ? console.log(loading) : setItems(data?.getItem)
    }, [data, items]);

    function changeIsDone(isDone: boolean, uuid: string) {
        isDone = !isDone
        putItem({variables: {uuid: uuid, isDone: isDone}}).then(() =>
            refetch()
        ).catch(e => {
            alert(e)
        })
    }

    function deleteItem(uuid: string) {
        removeItem({variables: {uuid: uuid}}).then(() =>
            refetch()
        ).catch(e => {
            alert(e)
        })
    }

    function createTodoItem() {
        if (item === "") {
            console.log(item)
        } else {
            createItem({variables: {item: item}}).then(() =>
                refetch()
            ).catch(e => {
                alert(e)
            })
        }
    }

    return (
        <>{
            loading ? <div className="center"><img alt="loading"
                    src="https://static-00.iconduck.com/assets.00/spinner-icon-2048x2048-mhj15xft.png"
                    className="App-logo img"/></div> :
                <div className="center">
                    {items.map((item: any, index: number) => {
                        return (
                            <div key={index} className="table">
                                <div className="flex-between">
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
                        <div className="flex-between">
                            <input onKeyDown={event => {
                                if (event.key == 'Enter') {
                                    createTodoItem()
                                    setItem("")
                                }
                            }}
                                   onChange={event => {
                                       setItem(event.target.value)
                                   }}
                                   id="demo" className="textbar" type="text" placeholder="Neuer Artikel eingeben"
                                   value={item}/>

                            <input type="button" onClick={createTodoItem} className="btn" value="Hinzufügen"></input>
                        </div>
                </div>
        }
        </>

    )
}

export default GetTodoItem;