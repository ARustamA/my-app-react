const UPDATE_MESSAGE = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReduce = (state, action) =>{

   if (action.type === UPDATE_MESSAGE){
      state.newMessageText = action.messageText;

   } else if (action.type === SEND_MESSAGE){
      let text = state.newMessageText;
      state.newMessageText = '';
      state.messageData.push({id: 6, message: text});
   }

   return state;
}

export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_MESSAGE, messageText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReduce;