import React from 'react';
import s from "./Message.module.css";

const  Message = (props) => {
    return (
        <div className={s.messege}>
            {props.massage_text}
        </div>
    )
}

export default Message;