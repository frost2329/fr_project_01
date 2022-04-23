const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

let initialState = {
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
}

const messengerReducer = (state = initialState, action) => {
    debugger;
    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            messageData: [...state.messageData, state.newMessageData],
            newMessageData: {...state.newMessageData, message_text: ''}
        }
    }
    else if (action.type === UPDATE_NEW_MESSAGE_DATA) {
        return {
            ...state,
            newMessageData: {...state.newMessageData, message_text: action.message_text}
        }
    }
    else return {...state};
}

export const addMessageAC = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageDataAC = (message_text) => ({
    type: UPDATE_NEW_MESSAGE_DATA,
    message_text: message_text

})

export default messengerReducer;