import React from 'react';
import s from "./Loading.module.css";
import loading_img from "../../../images/loading.svg";

const Loading = (props) => {
    return (
        <div className={s.loading}>
            <img src={props.isLoading ? loading_img : null} alt=""/>
        </div>
    )
}

export default Loading;