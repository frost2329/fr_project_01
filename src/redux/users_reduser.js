const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    usersData: [],
    count: 10,
    currentPage: 1,
    totalCount: 0,
    isLoading: false
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
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const follow = (id) => ({type: FOLLOW, id: id});
export const unFollow = (id) => ({type: UNFOLLOW, id: id});
export const setUsers = (usersData) => ({type: SET_USERS, usersData: usersData});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading: isLoading});
export default usersReducer;