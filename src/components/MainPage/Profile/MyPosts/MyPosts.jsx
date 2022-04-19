import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostAC, updateNewPostDataAC} from "../../../../redux/store";

const MyPosts = (props) => {
    let postElements = props.myPostsState.postData.map(p => <Post postState={p}/>);
    let newPostObject = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let updatePostText = () => {
        debugger;
        let post_text = newPostObject.current.value;
        props.dispatch(updateNewPostDataAC(post_text));
    }
    return (
        <div className={s.my_posts}>
            <div className={s.new_post}>
                <div>
                    <textarea onChange={updatePostText} ref={newPostObject} className={s.input_table} value={props.myPostsState.newPostData.post_text}/>
                </div>
                <div>
                    <button onClick={addPost} ick >
                        <div>Send</div>
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;