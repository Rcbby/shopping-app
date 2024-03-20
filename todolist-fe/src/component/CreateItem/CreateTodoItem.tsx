import React, {useState} from "react";
import {useCreateItemMutation, useGetItemQuery} from "../../graphql/generated/graphql";
import style from './CreateTodoItem.module.css'

export const CreateTodoItem = () => {
    const {refetch} = useGetItemQuery()
    const [item, setItem] = useState('');
    const [createItem] = useCreateItemMutation()

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
                    <input className={style.btn} type="button" onClick={createTodoItem} value="Hinzufügen"></input>
                </div>
            </div>
        </>
    )
}