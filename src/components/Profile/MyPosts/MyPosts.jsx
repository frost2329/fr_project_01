import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.myPostsState.postData.map(p => <Post postState={p}/>);

    let onAddPost = () => {
        props.addPost();
    }
    let onUpdatePostText = (e) => {
        let post_text = e.target.value;
        props.updatePostText(post_text);
    }
    return (
        <div className={s.my_posts}>
            <div className={s.new_post}>
                <div>
                    <textarea onChange={onUpdatePostText}
                              className={s.input_table}
                              value={props.myPostsState.newPostData.post_text}/>
                </div>
                <div>
                    <button onClick={onAddPost}>
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