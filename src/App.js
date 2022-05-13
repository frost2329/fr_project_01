import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Routes} from "react-router";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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
                                   element={<ProfileContainer />}/>
                            <Route path="/dialogs/*"
                                   element={<MessengerContainer />}/>
                            <Route path="/users/*"
                                   element={<UsersContainer />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
