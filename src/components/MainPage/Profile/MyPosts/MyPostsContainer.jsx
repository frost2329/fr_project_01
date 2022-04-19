import React from 'react';
import {addPostAC, updateNewPostDataAC} from "../../../../redux/store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }
    let updatePostText = (post_text) => {
        debugger;
        props.store.dispatch(updateNewPostDataAC(post_text));
    }
    return (<MyPosts myPostsState={state.profileState.myPostsState} a
                     addPost={addPost}
                     updatePostText={updatePostText}/>
    )
}
export default MyPostsContainer;