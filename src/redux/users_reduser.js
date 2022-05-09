const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: []
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
            return {...state, usersData: [...state.usersData, ...action.usersData]}
        default:
            return state;
    }
}

export const followAC = (id) => ({
    type: FOLLOW,
    id: id
})
export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id: id

})
export const setUsersAC = (usersData) => ({
    type: SET_USERS,
    usersData: usersData
})

export default usersReducer;