import {userAPI} from "../api/api";
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
    return (dispatch) => {
        dispatch(toggleIsLoadingPageAC(true));
        dispatch(setCurrentPageAC(currentPage));
        userAPI.getUsers(sizePage, currentPage)
            .then((data) => {
                dispatch(toggleIsLoadingPageAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setTotalCountAC(data.totalCount));
            })
    }
}
export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgressAC(true, userId))
        userAPI.follow(userId)
            .then((data) => {
                dispatch(toggleIsFollowingInProgressAC(false, userId))
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
            })
    }
}

export const unFollowTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgressAC(true, userId))
        userAPI.unFollow(userId)
            .then((data) => {
                dispatch(toggleIsFollowingInProgressAC(false, userId))
                if (data.resultCode === 0) {
                    dispatch(unFollowAC(userId));
                }
            })
    }
}
export default usersReducer;