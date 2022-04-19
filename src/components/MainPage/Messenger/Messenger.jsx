import React from 'react';
import s from "./Messenger.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";

const  Messenger = (props) => {
    let dialogElements = props.messengerState.dialogData.map( d => <Dialog id={d.id} name={d.name}/> )
    let messageElements = props.messengerState.messageData.map( m => <Message massage_text={m.message_text}/> )

    let onUpdateMessageText = (e) => {
        let message_text = e.target.value;
        props.updateMessageText(message_text);
    }
    let onAddMessage = () => {
        props.addMessage();
    }
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea onChange={onUpdateMessageText} value={props.messengerState.newMessageData.message_text}/>
                </div>
                <div>
                    <button onClick={onAddMessage} >
                        <div>Send</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Messenger;