const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        {
            user_id: 1,
            followed: true,
            user_name: 'Ben',
            avatar_img_url:'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg',
            status: 'welcome on my page',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            user_id: 2,
            followed: true,
            user_name: 'Den',
            avatar_img_url:'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg',
            status: 'welcome on my page',
            location: {country: 'Russia', city: 'Perm'}
        },
        {
            user_id: 3,
            followed: false,
            user_name: 'Pen',
            avatar_img_url:'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg',
            status: 'welcome on my page',
            location: {country: 'Russia', city: 'Perm'}
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.user_id === action.user_id) {
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
                    if (u.user_id === action.user_id) {
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

export const followAC = (user_id) => ({
    type: FOLLOW,
    user_id: user_id
})
export const unfollowAC = (user_id) => ({
    type: UNFOLLOW,
    user_id: user_id

})
export const setUsersAC = () => ({
    type: SET_USERS

})

export default usersReducer;