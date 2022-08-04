import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {showErrorTC} from "./app_reducer";

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
    return async (dispatch) => {
        try {
            let response =  await profileAPI.getProfile(userId)
            dispatch(setProfileAC(response));
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export const getUserStatusTC = (userId) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.getStatus(userId)
            dispatch(setUserStatusAC(response));
        } catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}

export const updateUserStatusTC = (status) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status)
            if (response.resultCode === 0) {
                dispatch(setUserStatusAC(status));
            }
        } catch (error) {
            debugger;
            dispatch(showErrorTC(error.message));
        }
    }
}

export const updateAvatarImageTC = (image) => {
    return async (dispatch, getState) => {
        try {
            let response = await profileAPI.updateAvatarImage(image)
            const currentUserId = getState().auth.userId
            if (response.resultCode === 0) {
                dispatch(getUserProfileTC(currentUserId));
            }
        } catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export const updateProfileDataTC = (profileData) => {
    return async (dispatch, getState) => {
        try {
            const currentUserId = getState().auth.userId
            let response = await profileAPI.updateProfileData(profileData)
            if (response.resultCode === 0) {
                dispatch(getUserProfileTC(currentUserId));
            }else {
                dispatch(stopSubmit('edit_profile', {_error: response.messages[0] }))
                return Promise.reject(response.messages[0])
            }
        } catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}

export default profileReducer;