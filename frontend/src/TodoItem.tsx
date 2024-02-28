import { useQuery} from "@apollo/client";
import {gql} from "./__generated__";
import './App.css'

const GET_TODO_ITEM = gql(`
query get {
  getItem {
    uuid
    item
    isDone
  }
}
`);

const GetTodoItem = () => {
    const {data, loading, error} = useQuery(
        GET_TODO_ITEM
    )

    function changeIsDone(isDone?: boolean, uuid?: String) {

    }

    function deleteItem(uuid?: String) {

    }

    if (error) return (<h1>Error: {error.message} </h1>)
    if (loading) return (<div className="center"> <img src="https://simpleicon.com/wp-content/uploads/loading.png" className="img App-logo"></img> </div>)

    return (
        <div className="center">
            {data?.getItem?.map((item, index) => {
                return (
                    <div key={index} className="table">
                        <input type="checkbox" className="input" onClick={() => changeIsDone(item?.isDone, item?.uuid)}
                               id={item?.uuid}></input>
                        <label htmlFor={item?.uuid} className="label">{item?.item}</label>
                        <input onClick={() => deleteItem()} type="button" className="deleteBtn" value="Löschen"></input>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default GetTodoItem;