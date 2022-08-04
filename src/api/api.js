import * as axios from 'axios';
const getInstanceForUser = (currentUserId) => {
    let apiKey;
    switch (currentUserId) {
        case 24031:
            apiKey = 'c3a5ce8f-4dee-4c48-90c8-4b68b3dab507';
            break;
        case 25030:
            apiKey = '9cef3074-c408-496c-b055-bc49968c822d';
            break;
        default:
            break;
    }
    let instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': apiKey}
    })
    return instance;
}
let currentUserId;

let instance = axios.create({
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
                currentUserId = response.data.data.id
                return response.data;
            })
    },
    getCaptchaUrl() {
        return instance
            .get(`security/get-captcha-url`)
            .then(response => response.data)
    },
    login(loginData) {
        return instance
            .post(`auth/login`, {
                email: loginData.email,
                password: loginData.password,
                rememberMe: loginData.rememberMe,
                captcha: loginData.captcha
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
        let instance = getInstanceForUser(currentUserId);
        return instance
            .put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            })
    },
    updateProfileData(data) {
        let instance = getInstanceForUser(currentUserId);
        return instance
            .put(`profile`, data)
            .then(response => {
                return response.data;
            })
    },
    updateAvatarImage(image) {
        let formData = new FormData();
        formData.append("image", image);
        let instance = getInstanceForUser(currentUserId);
        return instance
            .put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => {
                return response.data;
            })
    }
}