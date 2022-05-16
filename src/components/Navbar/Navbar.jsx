import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.sitebar}>
                <div className={s.item}>
                    <NavLink to='/profile'
                             className={s.a}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to= {`/dialogs`}
                             className={s.a}>Messenger</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music'
                             className={s.a}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news'
                             className={s.a}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings'
                             className={s.a}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users'
                             className={s.a}>Users</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;