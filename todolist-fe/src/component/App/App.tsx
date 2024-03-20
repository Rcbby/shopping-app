import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import TodoItem from "../TodoItem/TodoItem";
import style from './App.module.css'

export const App = () => {
    const client = new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:8080/graphql',
            headers: {
                "Content-Type": "application/json"
            }
        }),
        cache: new InMemoryCache()
    })

    return (
        <div className={style.grid}>
            <div>
                <h1 className={style.titel}>Einkaufsliste</h1>
                <ApolloProvider client={client}>
                    <TodoItem/>
                </ApolloProvider>
            </div>
        </div>
    );
}