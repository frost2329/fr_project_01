import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <MainPage mainPageState={props.state.mainPageState}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
