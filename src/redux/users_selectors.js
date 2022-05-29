export function getUsers (state) {
    return state.usersState.users;
}
export function getSizePage (state) {
    return state.usersState.sizePage;
}
export function getCurrentPage (state) {
    return state.usersState.currentPage;
}
export function getTotalCount (state) {
    return state.usersState.totalCount;
}
export function getIsLoadingPage (state) {
    return state.usersState.isLoadingPage;
}
export function getIsFollowingInProgress (state) {
    return state.usersState.isFollowingInProgress;
}
