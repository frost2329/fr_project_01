import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Routes} from "react-router";
import Profile from "./components/Profile/Profile";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className='main_page'>
                    <Navbar/>
                    <div className='main_content'>
                        <Routes>
                            <Route path="/profile"
                                   element={<Profile store={props.store} profileState={props.state.profileState} dispatch={props.dispatch}/>}/>
                            <Route path="/dialogs/*"
                                   element={<MessengerContainer store={props.store} />}/>
                            <Route path="/users/*"
                                   element={<UsersContainer store={props.store} />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
