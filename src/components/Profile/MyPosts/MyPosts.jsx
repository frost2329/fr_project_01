import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeHolder={"new post"}
                       name={"newPost"}
                       component={Textarea}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form:'newPost'})(NewPostForm)

const MyPosts = React.memo(props => {
    let postElements = props.posts.map(p => <Post key={p.id.toString()} postState={p}/>);
    return (
        <div className={s.my_posts}>
            <div className={s.new_post}>
                <NewPostReduxForm onSubmit={(formData) =>{
                    props.addPostAC(formData.newPost);
                }}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
})

export default MyPosts;