import React from "react";
import {useDeleteItemMutation, useGetItemQuery, usePutItemMutation} from "../../graphql/generated/graphql";
import style from './TodoList.module.css'

export const TodoList = (props: TodoItemAndNumber) => {

    const [removeItem] = useDeleteItemMutation()
    const [putItem] = usePutItemMutation()
    const {refetch} = useGetItemQuery()

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

    return (
        <>
            <div className={style.grid} key={props.index}>
                <div className={style.todo}>
                    <input className={style.checkbox} type="checkbox"
                           onClick={() => changeIsDone(props.isDone, props.uuid)}
                           id={props.uuid} checked={props.isDone}></input>
                    <label htmlFor={props.uuid}>{props.item}</label>
                </div>
                <div className={style.flexend}>
                    <input className={style.deleteBtn} onClick={() => deleteItem(props.uuid)} type="button"
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
}