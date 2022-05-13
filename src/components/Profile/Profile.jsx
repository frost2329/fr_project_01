import React from 'react';
import CoverPicture from "./CoverPicture/CoverPicture";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loading from "../common/Loading/Loading";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <CoverPicture coverPictureState={props.profileState.coverPictureState}/>
            <div>
                {!props.profileState.profile
                    ? <Loading isLoading={true}/>
                    : <img src={props.profileState.profile.photos.large} alt=""/>}
            </div>
            < MyPostsContainer/>

        </div>
    )
}
export default Profile;