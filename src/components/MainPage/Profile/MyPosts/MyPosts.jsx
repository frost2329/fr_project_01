import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.myPostsState.postData
        .map(p => <Post postState={p}/>)

    let newPostObject = React.createRef()
    let addPost = (e) => {
        let postText = newPostObject.current.value;
        alert(postText);
    }
    return (
        <div className={s.my_posts}>
            <div className={s.new_post}>
                <div>
                    <textarea ref={newPostObject} className={s.input_table} >
                        New post
                    </textarea>
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