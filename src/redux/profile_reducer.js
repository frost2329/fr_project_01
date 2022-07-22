import {profileAPI} from "../api/api";

const ADD_POST = 'profile_reducer/ADD_POST';
const SET_PROFILE = 'profile_reducer/SET_PROFILE';
const SET_USER_STATUS = 'profile_reducer/SET_USER_STATUS';
const SET_AVATAR_IMAGE = 'profile_reducer/SET_AVATAR_IMAGE';

let initialState = {
    profile: null,
    userStatus: '',
    posts: [
        {
            id: 1,
            post_text: 'Hello, how are you?',
            img_url: 'https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg',
            avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            post_author_name: 'Иванов Иван Иванович'
        },
        {
            id: 2,
            post_text: 'I love React!?',
            img_url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg',
            avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            post_author_name: 'Иванов Иван Иванович'
        },
        {
            id: 3,
            post_text: 'This is me first post here!?',
            img_url: 'https://images11.popmeh.ru/upload/img_cache/134/1341c77acc82b4450dac6d54f5e5a038_ce_1920x1024x0x128_cropped_666x444.jpg',
            avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            post_author_name: 'Иванов Иван Иванович'
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            return {
                ...state,
                posts: [{
                    id: 5,
                    post_text: action.post_text,
                    img_url: 'https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg',
                    avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                    post_author_name: 'Иванов Иван Иванович'
                }, ...state.posts]

            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        case SET_AVATAR_IMAGE:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostAC = (post_text) => ({type: ADD_POST, post_text: post_text})
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile: profile})
export const setUserStatusAC = (userStatus) => ({type: SET_USER_STATUS, userStatus: userStatus})
export const setAvatarImage = (photos) => ({type: SET_AVATAR_IMAGE, photos: photos})

export const getUserProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setProfileAC(data));
            });
    }
}
export const getUserStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setUserStatusAC(data));
            });
    }
}
export const updateUserStatusTC = (status) => {
    return (dispatch) => {
        console.log(status);
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            });
    }
}
export const updateAvatarImageTC = (image) => {
    return (dispatch) => {
        profileAPI.updateAvatarImage(image)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAvatarImage(data.data.photos));
                }
            });
    }
}

export default profileReducer;