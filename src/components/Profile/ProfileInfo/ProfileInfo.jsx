import React from 'react';
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const  ProfileInfo = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.user_name}>{props.fullName}</div>
            <div>
                <ProfileStatus userStatus={props.userStatus}
                               updateUserStatusTC={props.updateUserStatusTC}/>
            </div>
        </div>
    );
}

export default ProfileInfo;