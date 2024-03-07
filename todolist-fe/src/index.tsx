import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import './styles/index.css'
import TodoItem from './TodoItem'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
        headers: {
          "Content-Type": "application/json"
        }
    }),
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <div className="div">
        <h1 className="header">Einkaufsliste</h1>
        </div>
        <ApolloProvider client={client}>
            <TodoItem />
        </ApolloProvider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();