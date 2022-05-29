const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ben'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Sofia'}
    ],
    messages: [
        {message_id: 1, dialog_id: 1, user_id:1, message_text: 'Hi'},
        {message_id: 2, dialog_id: 1, user_id:1, message_text: 'How are you?'},
        {message_id: 3, dialog_id: 1, user_id:1, message_text: 'Where are you?'},
        {message_id: 4, dialog_id: 1, user_id:1, message_text: 'Are you ok??'}
    ],
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {message_id: 5, dialog_id: 1, user_id:1, message_text: action.message}
                ],
            }
        default: return state;
    }
}

export const addMessageAC = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export default messengerReducer;