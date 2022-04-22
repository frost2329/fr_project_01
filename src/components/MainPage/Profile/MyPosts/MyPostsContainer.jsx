import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostDataAC} from "../../../../redux/profile_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPostsState: state.profileState.myPostsState
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost() {
            dispatch(addPostAC());
        },
        updatePostText(post_text) {
            dispatch(updateNewPostDataAC(post_text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;