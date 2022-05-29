import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'
import Avatar from './Avatar/Avatar'



const Dialogs = (props) => {

   let dialogElements = props.state.dialogsData.map(
      (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

   let avaElement = props.state.avaData.map(
      (avatar) => <Avatar ava={avatar.ava} id={avatar.id} /> )

   let messageElements = props.state.messageData.map(
      (messageArray) => <Message messageText={messageArray.message} id={messageArray.id} />)

   return (

      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {avaElement}
            {dialogElements}
         </div>

         <div className={style.messagesItem}>
            {messageElements}
         </div>

         <div>
            <textarea placeholder='your message' />
            <button type='button' className={style.button}>Send message</button>
         </div>
      </div>

      
   )
}

export default Dialogs;