import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

WebFont.load({
    google: {
        families: ['Montserrat:400,600', 'sans-serif']
    }
});

const client = new ApolloClient({
    uri: process.env.GRAPHQL_SERVER || 'http://localhost:3003/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
