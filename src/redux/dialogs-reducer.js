const UPDATE_MESSAGE = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   dialogsData: [
      { id: 1, name: 'Aisy' },
      { id: 2, name: 'Ruslan' },
      { id: 3, name: 'Vlad' },
      { id: 4, name: 'Zulf' },
      { id: 5, name: 'Fidan' },
      { id: 6, name: 'Vildan' },
   ],
   messageData: [
      { id: 1, message: 'hi, I miss you' },
      { id: 2, message: 'winter os coming' },
      { id: 3, message: 'hi, I need my phone' },
      { id: 4, message: 'Yo yo yo' },
      { id: 5, message: 'goodbye' },
      { id: 6, message: 'I do not understand you' },
   ],
   avaData: [
      { id: 1, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
      { id: 2, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
      { id: 3, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
      { id: 4, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
      { id: 5, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
      { id: 6, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },

   ],
};

const dialogsReduce = (state = initialState, action) =>{

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