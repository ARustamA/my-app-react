const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store =
{
   _state: {
      profilePage: {
         PostData: [
            { id: 1, message: 'hi, I miss you', likesCount: 4 },
            { id: 2, message: 'winter os coming', likesCount: 5 },
            { id: 3, message: 'hi, I need my phone', likesCount: 6 },
            { id: 4, message: 'Yo yo yo', likesCount: 2 },
            { id: 5, message: 'goodbye', likesCount: 1 },
            { id: 6, message: 'I do not understand you', likesCount: 3 },
         ],

         newPostText: ''
         

      },
      dialogsPage: {
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

         newMessageText: '',
      },
   
   },
   _reRenderEntireTree(){ 
         console.log('state changed')
      },

   
   getState() {
      return this._state;
   },
   subscribe(observer) { 
      this._reRenderEntireTree = observer; 
   },


   _addPost() {
         let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0,
      }
      this._state.profilePage.PostData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._reRenderEntireTree(this._state);
   },
   _updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._reRenderEntireTree(this._state);
   },

   _updateNewMessageText(messageText){
      this._state.dialogsPage.newMessageText = messageText;
      this._reRenderEntireTree(this._state);
   },

   _sendMessage(){
      let text = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messageData.push({id: 6, message: text});
      this._reRenderEntireTree(this._state);
   },

   
   dispatch(action){
      if (action.type === ADD_POST){
         this._addPost()
      } else if (action.type === UPDATE_POST){
         this._updateNewPostText(action.newText);
      } else if (action.type === UPDATE_MESSAGE){
         this._updateNewMessageText(action.messageText)
      } else if (action.type === SEND_MESSAGE){
         this._sendMessage()
      }
   },

   
}; 

export const addPostActionCreator = () => ({ type: ADD_POST })

export const UpdateNewPostCreator = (text) => ({ type: UPDATE_POST, newText:text })

export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_MESSAGE, messageText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default store;

window.store = store;