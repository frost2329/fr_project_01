import React from 'react';
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import s from "./MainPage.module.css";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import MessengerContainer from "./Messenger/MessengerContainer";

const MainPage = (props) => {
    return (
        <div className={s.main_page}>
            <Navbar/>
            <div className={s.main_content}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile store={props.store} profileState={props.state.profileState} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*"
                           element={<MessengerContainer store={props.store} />}/>
                </Routes>
            </div>
        </div>
    )
}

export default MainPage;