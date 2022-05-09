import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.user_block}>
                <img className={s.avatar}
                     src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                     alt=""/>
                <div className={s.user_name}>
                    Иванов Иван Иванович
                </div>
            </div>
            <div className={s.sitebar}>
                <div>
                    <NavLink to='/profile' className={s.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to= {`/dialogs`}
                             className={s.item}>Messenger</NavLink>
                </div>
                <div>
                    <NavLink to='/music'
                             className={s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/news'
                             className={s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/settings'
                             className={s.item}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to='/users'
                             className={s.item}>Users</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;