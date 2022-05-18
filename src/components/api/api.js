import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507'}
})
export const superAPI = {
    getUsers(count = 10, currentPage = 1) {
        return instance.get(`users?count=${count}&page=${currentPage}`)
            .then(response => {
                return response.data;
            })
    },
    unFolow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    folow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
}