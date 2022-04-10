import React from 'react';
import s from "./Header.module.css";
import logo from "./logo.png";

const  Header = () => {
    return (
        <header className={s.main_header}>
            <img className={s.logo} src={logo} alt=""/>
        </header>
    );
}

export default Header;