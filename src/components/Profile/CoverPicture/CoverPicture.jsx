import React from 'react';
import s from "./CoverPicture.module.css";

const  CoverPicture = (props) => {
    return (
        <div className={s.cover_picture}>
            <img src={props.coverPictureState.img_url} alt=""/>
        </div>
    );
}

export default CoverPicture;