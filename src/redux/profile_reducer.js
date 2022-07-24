import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile_reducer/ADD_POST';
const SET_PROFILE = 'profile_reducer/SET_PROFILE';
const SET_USER_STATUS = 'profile_reducer/SET_USER_STATUS';

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
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
            debugger;
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        default:
            return state;
    }
}

export const addPostAC = (post_text) => ({type: ADD_POST, post_text: post_text})
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile: profile})
export const setUserStatusAC = (userStatus) => ({type: SET_USER_STATUS, userStatus: userStatus})

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
    return (dispatch, getState) => {
        const currentUserId = getState().auth.userId
        profileAPI.updateAvatarImage(image)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getUserProfileTC(currentUserId));
                }
            });
    }
}
export const updateProfileDataTC = (profileData) => {
    return  async  (dispatch, getState) => {
        const currentUserId = getState().auth.userId
        const response = await profileAPI.updateProfileData(profileData)

        if (response.resultCode === 0) {
            dispatch(getUserProfileTC(currentUserId));
        }else {
            debugger;
            dispatch(stopSubmit('edit_profile', {_error: response.messages[0] }))
            return Promise.reject(response.messages[0])
        }
    }
}

export default profileReducer;