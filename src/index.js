import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";

let renderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
};

store.subscribe(() => {
    renderEntireTree(store.getState());
});


renderEntireTree(store.getState());
