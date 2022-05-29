export function getCurrentUserId (state) {
    return state.auth.userId;
}
export function getUserEmail (state) {
    return state.auth.userEmail;
}
export function getUserLogin (state) {
    return state.auth.userLogin;
}
export function getIsAuth (state) {
    return state.auth.isAuth;
}


