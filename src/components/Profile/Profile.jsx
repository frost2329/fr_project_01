import React from 'react';
import Loading from "../common/Loading/Loading";
import s from "./Profile.module.css";
import user_avatar_img from "../../images/avatar_user_img.png";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    if (!props.profile) return <Loading isLoading={true}/>

    let onUpdateAvatarImage = (e) => {
        if (e.target.files.length > 0) {
            props.updateAvatarImageTC(e.target.files[0])}
        }
    return (
        <div className={s.wripper}>
            <div className={s.narrow_column_wrap}>
                <div className={s.page_block}>
                    <div className={s.avatar_img_bloc}>
                        <img className={s.avatar_img} src={props.profile.photos.large
                            ? props.profile.photos.large
                            : user_avatar_img} alt=""/>
                        {props.isOwner && <input type='file' onChange={onUpdateAvatarImage}/>}
                    </div>
                    <div>
                        Редактировать
                    </div>
                </div>
            </div>
            <div className={s.wide_column_wrap}>
                <div className={s.page_info_block}>
                    <ProfileInfo profile={props.profile}
                                 isOwner={props.isOwner}
                                 userStatus={props.userStatus}
                                 updateProfileDataTC={props.updateProfileDataTC}
                                 updateUserStatusTC={props.updateUserStatusTC}/>
                </div>
                <MyPosts posts={props.posts}
                         addPostAC={props.addPostAC}/>
            </div>
        </div>
    )
}
export default Profile;