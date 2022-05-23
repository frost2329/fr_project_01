import React from 'react';
import s from "./Header.module.css";
import logo from "./logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.main_header}>
            <img className={s.logo} src={logo} alt=""/>
            <div className={s.auth_block}>
                {props.isAuth
                    ? (<div className={s.login}>
                            <button className={s.logout} onClick={props.logoutTC}>Logout</button>
                            <div className={s.logout}> {props.userLogin}</div>
                        </div>)
                    : <NavLink to='/login' className={s.login}> login </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;