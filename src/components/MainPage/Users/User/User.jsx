import React from 'react';
import s from "./User.module.css";
import user_avatar_img from "../../../../images/avatar_user_img.png";

const User = (props) => {
    let onUnFollow = () => {
        props.unFollow(props.user.id);
    }
    let onfollow = () => {
        props.follow(props.user.id);
    }
    return (
        <div className={s.user}>
            <div className={s.user_avatar_block}>
                <img src={props.user.photos.small != null ? props.user.photos.small : user_avatar_img}/>
            </div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </div>
            <div>
                {props.user.followed
                    ? <button onClick={onUnFollow}>unfollow</button>
                    : <button onClick={onfollow}>follow</button>}
            </div>
        </div>
    )
}

export default User;