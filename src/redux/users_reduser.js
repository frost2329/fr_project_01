const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING_PAGE = 'TOGGLE_IS_LOADING_PAGE';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    usersData: [],
    count: 10,
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
                usersData: state.usersData.map(u => {
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
                usersData: state.usersData.map(u => {
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
            return {...state, usersData: action.usersData}
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

export const follow = (id) => ({type: FOLLOW, id: id});
export const unFollow = (id) => ({type: UNFOLLOW, id: id});
export const setUsers = (usersData) => ({type: SET_USERS, usersData: usersData});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const toggleIsLoadingPage = (isLoading) => ({type: TOGGLE_IS_LOADING_PAGE, isLoading: isLoading});
export const toggleIsFollowingInProgress = (isLoading, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isLoading: isLoading,
    userId: userId
});

export default usersReducer;