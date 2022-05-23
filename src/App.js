import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Routes} from "react-router";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='main_page'>
                    <Navbar/>
                    <div className='main_content'>
                        <Routes>
                            <Route path='/profile/' element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer />}/>
                            <Route path="/dialogs/*" element={<MessengerContainer />}/>
                            <Route path="/users/*" element={<UsersContainer />}/>
                            <Route path="/login" element={<LoginContainer />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
