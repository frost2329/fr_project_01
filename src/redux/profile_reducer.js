const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {};
        Object.assign(newPost, state.myPostsState.newPostData);
        state.myPostsState.postData.push(newPost);
        state.myPostsState.newPostData.post_text = '';
    }
    else if (action.type === UPDATE_NEW_POST_DATA) {
        let NewPostData = {};
        Object.assign(NewPostData, state.myPostsState.newPostData);
        NewPostData.post_text = action.post_text;
        state.myPostsState.newPostData = NewPostData;
    }
    return state;
}

export default profileReducer;