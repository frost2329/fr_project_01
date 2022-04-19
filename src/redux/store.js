import profileReducer from "./profile_reducer";
import messengerReducer from "./messenger_reducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

const store = {
    _state: {
        headerState: {},
        navBarState: {},
        messengerState: {
                dialogData: [
                    {id: 1, name: 'Ben'},
                    {id: 2, name: 'Anna'},
                    {id: 3, name: 'Sofia'}
                ],
                messageData: [
                    {message_id: 1, dialog_id: 1, user_id:1, message_text: 'Hi'},
                    {message_id: 2, dialog_id: 1, user_id:1, message_text: 'How are you?'},
                    {message_id: 3, dialog_id: 1, user_id:1, message_text: 'Where are you?'},
                    {message_id: 4, dialog_id: 1, user_id:1, message_text: 'Are you ok??'}
                ],
                newMessageData: {
                    message_id: 5,
                    dialog_id: 1,
                    user_id: 1,
                    message_text: ''
                }
            },
        profileState: {
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
    },
    _callSubscriber() {
        console.log('changed state');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        debugger;
        this._state.profileState = profileReducer(this._state.profileState, action);
        this._state.messengerState = messengerReducer(this._state.messengerState, action);
        this._callSubscriber(this._state);
    }
}
export const addPostAC = () => ({
    type: ADD_POST
})
export const updateNewPostDataAC = (post_text) => ({
    type: UPDATE_NEW_POST_DATA,
    post_text: post_text

})
export const addMessageAC = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageDataAC = (message_text) => ({
    type: UPDATE_NEW_MESSAGE_DATA,
    message_text: message_text

})

window.state = store.getState();


export default store;