import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'
import Avatar from './Avatar/Avatar'
import {updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer'




const Dialogs = (props) => {

   let dialogElements = props.state.dialogsData.map(
      (dialog) => <DialogItem name={dialog.name} id={dialog.id} />)

   let avaElement = props.state.avaData.map(
      (avatar) => <Avatar ava={avatar.ava} id={avatar.id} />)

   let messageElements = props.state.messageData.map(
      (messageArray) => <Message messageText={messageArray.message} id={messageArray.id} />)

   let newMessageText = props.state.newMessageText;

   let onClickSendMessage = () => {
      props.dispatch( sendMessageCreator())
   }
   
   let onNewMessageChange = (event) => {
      let textFromEvent = event.target.value;
      props.dispatch( updateNewMessageTextCreator(textFromEvent) )
   }

   return (

      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {avaElement}
            {dialogElements}
         </div>
      <div>
         <div className={style.messagesItem}>
            {messageElements}
         </div>

         
            <textarea   placeholder='Your message'
                        value={newMessageText}
                        onChange={ onNewMessageChange } />
            <a type='button'
               className={style.button}
               onClick={ onClickSendMessage }>
               Send message   </a>
      </div>
      </div>


   )
}

export default Dialogs;