import React from 'react';
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import s from "./MainPage.module.css";
import {Route} from "react-router-dom";
import Messenger from "./Messenger/Messenger";
import {Routes} from "react-router";

const MainPage = (props) => {
    return (
        <div className={s.main_page}>
            <Navbar/>
            <div className={s.main_content}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile profileState={props.state.profileState} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*"
                           element={<Messenger messengerState={props.state.messengerState} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default MainPage;