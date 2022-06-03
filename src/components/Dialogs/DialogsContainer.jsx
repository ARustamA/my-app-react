import {updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

   let state = props.store.getState().dialogsPage;

   let onClickSendMessage = () => {
      props.store.dispatch( sendMessageCreator())
   }
   
   let onNewMessageChange = (textFromEvent) => {
      props.store.dispatch( updateNewMessageTextCreator(textFromEvent) )
   }
   return (
      <Dialogs updateNewMessageText = {onNewMessageChange}
               sendMessage = {onClickSendMessage}
               dialogsPage = {state}/>

   )
}

export default DialogsContainer;