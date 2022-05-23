import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeHolder={"new post"}  name={"newPost"} component={"textarea"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form:'newPost'})(NewPostForm)

const MyPosts = (props) => {
    let postElements = props.myPostsState.postData.map(p => <Post postState={p}/>);

    return (
        <div className={s.my_posts}>
            <div className={s.new_post}>
                <NewPostReduxForm onSubmit={(formData) =>{
                    props.addPostAC(formData.newPost);
                }}/>
            </div>
            {/*<div className={s.new_post}>
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
            </div>*/}
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;