import React from "react";


/*
const AddItem = () => {

    const [item, setItem] = useState("")
    const createItem = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({item})
        }
            fetch('http://localhost:8080/todolist', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(`There was an unexpected error: ${error}`))
        setItem("")
    }

        return (
            <div className="div">
                <h1 className="headline">New item</h1>
                <input onChange={event => {setItem(event.target.value)}} id="demo" className="textbar" type="text" placeholder="Enter new item" value={item}/>
                <button onClick={createItem} className="btn">Create</button>
            </div>
        );
}
*/