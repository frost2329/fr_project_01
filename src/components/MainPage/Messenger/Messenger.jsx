import React from 'react';
import s from "./Messenger.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";

const  Messenger = (props) => {
    let dialogElements = props.messengerState.dialogData.map( d => <Dialog id={d.id} name={d.name}/> )
    let messageElements = props.messengerState.messageData.map( m => <Message massage_text={m.massage_text}/> )
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Messenger;