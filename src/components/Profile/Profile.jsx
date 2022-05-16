import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loading from "../common/Loading/Loading";
import s from "./Profile.module.css";

const Profile = (props) => {
    if (!props.profileState.profile) return <Loading isLoading={true}/>
    return (
        <div className={s.wripper}>
            <div className={s.narrow_column_wrap}>
                <div className={s.page_block}>
                    <div className={s.avatar_img_bloc}>
                        <img className={s.avatar_img} src={props.profileState.profile.photos.large} alt=""/>
                    </div>
                    <div>
                        Редактировать
                    </div>
                </div>
            </div>
            <div className={s.wide_column_wrap}>
                <div className={s.page_info_block}>

                    <div>{props.profileState.profile.fullName}</div>
                    <div>{props.profileState.profile.aboutMe}</div>
                </div>
                < MyPostsContainer/>
            </div>


        </div>
    )
}
export default Profile;