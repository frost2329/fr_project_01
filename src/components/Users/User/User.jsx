import React from 'react';
import s from "./User.module.css";
import user_avatar_img from "../../../images/avatar_user_img.png";
import {NavLink} from "react-router-dom";
import {superAPI} from "../../api/api";

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
                        ? <button disabled={props.isFollowingInProgress.some(u => u === props.user.id)}
                                  onClick={() => {
                                      props.toggleIsFollowingInProgress(true, props.user.id)
                                      superAPI.unFollow(props.user.id)
                                          .then((response) => {
                                              props.toggleIsFollowingInProgress(false, props.user.id)
                                              if (response.resultCode === 0) {
                                                  props.unFollow(props.user.id);
                                              }
                                          })
                                  }}>unfollow</button>
                        : <button disabled={props.isFollowingInProgress.some(u => u === props.user.id)}
                                  onClick={() => {
                                      props.toggleIsFollowingInProgress(true, props.user.id)
                                      superAPI.follow(props.user.id)
                                          .then((response) => {
                                              props.toggleIsFollowingInProgress(false, props.user.id)
                                              if (response.resultCode === 0) {
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