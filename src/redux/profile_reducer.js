const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA';

let initialState = {
    myPostsState: {
        postData: [
            {
                id: 1,
                post_text: 'Hello, how are you?',
                img_url: 'https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg',
                avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                post_author_name: 'Иванов Иван Иванович'
            },
            {
                id: 2,
                post_text: 'I love React!?',
                img_url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg',
                avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                post_author_name: 'Иванов Иван Иванович'
            },
            {
                id: 3,
                post_text: 'This is me first post here!?',
                img_url: 'https://images11.popmeh.ru/upload/img_cache/134/1341c77acc82b4450dac6d54f5e5a038_ce_1920x1024x0x128_cropped_666x444.jpg',
                avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                post_author_name: 'Иванов Иван Иванович'
            }
        ],
        newPostData: {
            id: null,
            post_text: '',
            img_url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg',
            avatar_img_url: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            post_author_name: 'Иванов Иван Иванович'
        }

    },
    coverPictureState: {
        img_url: 'https://triptales.ru/wp-content/uploads/2020/05/vpechatlyayuschie-panoramy-krupneyshih-gorodov-mira.jpg'
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                myPostsState: {
                    postData: [...state.myPostsState.postData, state.myPostsState.newPostData],
                    newPostData: {...state.myPostsState.newPostData, post_text: ''}
                }
            };
        case UPDATE_NEW_POST_DATA:
            return {
                ...state,
                myPostsState: {
                    ...state.myPostsState,
                    newPostData: {...state.myPostsState.newPostData, post_text: action.post_text}
                }
            };
        default:
            return state;
    }
}

export const addPostAC = () => ({
    type: ADD_POST
})
export const updateNewPostDataAC = (post_text) => ({
    type: UPDATE_NEW_POST_DATA,
    post_text: post_text
})

export default profileReducer;