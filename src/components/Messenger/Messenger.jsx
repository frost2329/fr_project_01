import React from 'react';
import s from "./Messenger.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator} from "../../utils/validators";

const maxLength = maxLengthCreator(50);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeHolder={"new message"}
                       name={'newMessage'}
                       component={Textarea}
                       validate={[maxLength]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form:'newMessage'})(NewMessageForm)

const  Messenger = (props) => {
    let dialogElements = props.messengerState.dialogData.map( d => <Dialog id={d.id} name={d.name}/> )
    let messageElements = props.messengerState.messageData.map( m => <Message massage_text={m.message_text}/> )

    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <NewMessageReduxForm onSubmit={(message)=>{
                    props.addMessageAC(message.newMessage)
                }}/>
            </div>
        </div>
    )
}

export default Messenger;