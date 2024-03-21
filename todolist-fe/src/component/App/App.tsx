import TodoItem from "../TodoItem/TodoItem";
import style from './App.module.css'
import React from "react";

export const App = () => {

    return (
        <div className={style.grid}>
            <div>
                <h1 className={style.titel}>Einkaufsliste</h1>
                <TodoItem/>
            </div>
        </div>
    );
}

