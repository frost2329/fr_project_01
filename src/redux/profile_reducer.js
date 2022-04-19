const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

const messengerReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {};
        Object.assign(newMessage, state.newMessageData);
        state.messageData.push(newMessage);
        state.newMessageData.message_text = '';
    }
    else if (action.type === UPDATE_NEW_MESSAGE_DATA) {
        let newMessageData = {};
        Object.assign(newMessageData, state.newMessageData);
        newMessageData.message_text = action.message_text;
        state.newMessageData = newMessageData;
    }
    return state;
}

export default messengerReducer;