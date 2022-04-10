import React from 'react';
import s from "./Profile.module.css";
import CoverPicture from "./CoverPicture/CoverPicture";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <CoverPicture coverPictureState={props.profileState.coverPictureState}/>
            <MyPosts myPostsState={props.profileState.myPostsState}/>
        </div>
    );
}

export default Profile;