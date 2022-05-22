import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507'}
})
export const superAPI = {
    getUsers(sizePage= 10, currentPage= 1) {
        return instance
            .get(`users?count=${sizePage}&page=${currentPage}`)
            .then(response => {
                return response.data;
            })
    },
    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}
export const authAPI = {
    auth() {
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
            .then(response => {
                debugger;
                return response.data;
            })
    }
}