import style from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {

   let dialogElements = props.dataDialogs.map( (dialog) =>  <DialogItem name = {dialog.name}   id = {dialog.id} />)
   let messageElements =  props.dataMessage.map( (messageArray) => <Message messageText = {messageArray.message}   id = {messageArray.id}/>)

   return(
      
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {dialogElements}
         </div>

         <div className={style.messagesItem}>
            {messageElements}
         </div>
      </div>
   )
}

export default Dialogs;