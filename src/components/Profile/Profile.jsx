import React from 'react';
import Loading from "../common/Loading/Loading";
import s from "./Profile.module.css";
import user_avatar_img from "../../images/avatar_user_img.png";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    if (!props.profile) return <Loading isLoading={true}/>
    return (
        <div className={s.wripper}>
            <div className={s.narrow_column_wrap}>
                <div className={s.page_block}>
                    <div className={s.avatar_img_bloc}>
                        <img className={s.avatar_img} src={props.profile.photos.large
                            ? props.profile.photos.large
                            : user_avatar_img} alt=""/>
                    </div>
                    <div>
                        Редактировать
                    </div>
                </div>
            </div>
            <div className={s.wide_column_wrap}>
                <div className={s.page_info_block}>
                    <ProfileInfo fullName={props.profile.fullName}
                                 userStatus={props.userStatus}
                                 updateUserStatusTC={props.updateUserStatusTC}/>
                </div>
                <MyPosts posts={props.posts}
                         addPostAC={props.addPostAC}/>
            </div>
        </div>
    )
}
export default Profile;