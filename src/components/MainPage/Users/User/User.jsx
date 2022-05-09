import React from 'react';
import s from "./User.module.css";

const User = (props) => {
    let onUnFollow = () => {
        props.unFollow(props.user.user_id);
    }
    let onfollow = () => {
        props.follow(props.user.user_id);
    }
    return (
        <div className={s.user}>
            <div className={s.user_avatar_block}>
                <img src={props.user.avatar_img_url} alt=""/>
            </div>
            <div>
                <div>{props.user.user_name}</div>
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