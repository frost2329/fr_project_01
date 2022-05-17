import React from 'react';
import s from "./User.module.css";
import user_avatar_img from "../../../images/avatar_user_img.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    return (
        <div className={s.user}>
            <NavLink to={`/profile/${props.user.id}`}>
                <div className={s.u_block_el}>
                    <img className={`${s.u_avatar_img} ${s.u_avatar_block_el}`}
                         src={props.user.photos.small != null ? props.user.photos.small : user_avatar_img} alt=''/>
                </div>
            </NavLink>
            <div className={`${s.u_block_el}`}>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
                <div className={s.u_block_el}>
                    {props.user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                                {withCredentials: true,
                                 headers: {'API-KEY': 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507'}
                                }
                            )
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(props.user.id);
                                    }
                                })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {},
                                {withCredentials: true,
                                    headers: {'API-KEY': 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507'}
                                }
                            )
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(props.user.id);
                                    }
                                })
                        }}>follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;