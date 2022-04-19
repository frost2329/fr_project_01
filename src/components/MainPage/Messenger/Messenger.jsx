import React from 'react';
import s from "./Messenger.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";
import {addMessageAC, updateNewMessageDataAC, updateNewPostDataAC} from "../../../redux/store";

const  Messenger = (props) => {
    let dialogElements = props.messengerState.dialogData.map( d => <Dialog id={d.id} name={d.name}/> )
    let messageElements = props.messengerState.messageData.map( m => <Message massage_text={m.message_text}/> )

    let newMessageObject = React.createRef();
    let updateMessageText = () => {
        let message_text = newMessageObject.current.value;
        props.dispatch(updateNewMessageDataAC(message_text));
    }
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }
    debugger;
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea onChange={updateMessageText} ref={newMessageObject} value={props.messengerState.newMessageData.message_text}/>
                </div>
                <div>
                    <button onClick={addMessage} >
                        <div>Send</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Messenger;