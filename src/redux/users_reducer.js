import {userAPI} from "../api/api";
import {showErrorTC} from "./app_reducer";
const FOLLOW = 'users_reducer/FOLLOW';
const UNFOLLOW = 'users_reducer/UNFOLLOW';
const SET_USERS = 'users_reducer/SET_USERS';
const SET_TOTAL_COUNT = 'users_reducer/SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'users_reducer/SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING_PAGE = 'users_reducer/TOGGLE_IS_LOADING_PAGE';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users_reducer/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    sizePage: 10,
    currentPage: 1,
    totalCount: 0,
    isLoadingPage: false,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_LOADING_PAGE:
            return {...state, isLoadingPage: action.isLoading}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, isFollowingInProgress: action.isLoading
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, id: id});
export const unFollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const toggleIsLoadingPageAC = (isLoading) => ({type: TOGGLE_IS_LOADING_PAGE, isLoading: isLoading});
export const toggleIsFollowingInProgressAC = (isLoading, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isLoading: isLoading, userId: userId});

export const getUsersTC = (sizePage, currentPage) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsLoadingPageAC(true));
            dispatch(setCurrentPageAC(currentPage));
            let response =  await userAPI.getUsers(sizePage, currentPage)
            dispatch(toggleIsLoadingPageAC(false));
            dispatch(setUsersAC(response.items));
            dispatch(setTotalCountAC(response.totalCount));
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export const followTC = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFollowingInProgressAC(true, userId))
            let response =  await userAPI.follow(userId)
            dispatch(toggleIsFollowingInProgressAC(false, userId))
            if (response.resultCode === 0) {
                dispatch(followAC(userId));
            }
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export const unFollowTC = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFollowingInProgressAC(true, userId))
            let response =  await userAPI.unFollow(userId)
            dispatch(toggleIsFollowingInProgressAC(false, userId))
            if (response.resultCode === 0) {
                dispatch(unFollowAC(userId));
            }
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}


export default usersReducer;