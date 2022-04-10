import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.author_block}>
                <img className={s.avatar} src={props.postState.avatar_img_url} alt=""/>
                <span className={s.author_name}>{props.postState.post_author_name}</span>
            </div>
            <div>
                {props.postState.post_text}
            </div>
            <div>
                <img className={s.post_image} src={props.postState.img_url} alt=""/>
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;