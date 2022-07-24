import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormControls/FormControls";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    let onSubmit = (formData) => {
        props.updateProfileDataTC(formData).then(
            ()=> {
                debugger;
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.wrapper}>
            <div className={s.user_name}>{props.profile.fullName}</div>
            <div>
                <ProfileStatus userStatus={props.userStatus}
                               isOwner={props.isOwner}
                               updateUserStatusTC={props.updateUserStatusTC}/>
            </div>
            <hr/>
            <div>
                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}/>}
            </div>
        </div>
    )
}
const ProfileData = (props) => {
    return <div>
        <div>
            {props.isOwner && <button onClick={() => {
                props.setEditMode(true)
            }}> Edit </button>}
        </div>
        <div>
            <span>В поисках работы:</span> {props.profile.lookingForAJob ? 'Да' : 'Нет'}
        </div>
        <div>
            <span>Обо мне:</span> {props.profile.aboutMe}
        </div>
        <div>
            <span>Стек навыков:</span> {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <span>Контакты:</span> {Object.keys(props.profile.contacts).map((key) => {
            return (<Contact key={key} contactTitle={key} value={props.profile.contacts[key]}/>)
        })}
        </div>


    </div>
}
const ProfileDataFrom = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div className={s.error}>
            {props.error && (<div className={s.error}>{props.error}</div>)}
        </div>
        <div>
            Full name: <Field placeHolder={"Full Name"} name={"fullName"} component={Input}/>
        </div>
        <div>
            Looking For A Job: <Field placeHolder={"Looking For A Job:"} name={"lookingForAJob"} component={Input}
                                      type={"checkbox"}/>
        </div>
        <div>
            About Me: <Field placeHolder={"About Me"} name={"aboutMe"} component={Textarea}/>
        </div>
        <div>
            Looking For A Job Description: <Field placeHolder={"Looking For A Job Description"}
                                                  name={"lookingForAJobDescription"} component={Textarea}/>
        </div>
        <div>
            <span>Контакты:</span> {Object.keys(props.profile.contacts).map((key) => {
            return (<div className={s.contact} key={key} >
                <span>{key}</span> <Field placeHolder={props.profile.contacts[key]} name={'contacts.' + key} component={Input}/>
            </div>)
        })}
        </div>
    </form>

}
const ProfileDataReduxForm = reduxForm({form: 'edit_profile'})(ProfileDataFrom)
const Contact = (props) => {
    return (
        <div className={s.contact}>
            <span>{props.contactTitle}: </span> {props.value}
        </div>
    )
}

export default ProfileInfo;