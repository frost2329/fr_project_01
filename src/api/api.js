import * as axios from 'axios';
let currentUserId;
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507'}
})
export const userAPI = {
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
                debugger;
                return response.data;
            })
    },
    follow(userId) {
        debugger;
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                debugger;
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
    },
    login(loginData) {
        return instance
            .post(`auth/login`, {
                email: loginData.email,
                password: loginData.password,
                rememberMe: loginData.rememberMe,
                captcha: true
            })
            .then(response => {
                return response.data;
            })
    },
    logout() {
        return instance
            .delete(`auth/login`)
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
                return response.data;
            })
    },
    updateAvatarImage(image) {
        let formData = new FormData();
        formData.append("image", image);
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => {
                return response.data;
            })
    }
}