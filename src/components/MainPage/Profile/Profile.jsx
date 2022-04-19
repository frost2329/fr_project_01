import React from 'react';
import CoverPicture from "./CoverPicture/CoverPicture";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <CoverPicture coverPictureState={props.profileState.coverPictureState}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;