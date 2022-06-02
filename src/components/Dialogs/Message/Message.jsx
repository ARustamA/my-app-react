import style from './../Dialogs.module.css'

const Message = (props) => {

   return (
      <div className={style.dialog}>
         {props.messageText}

      </div>
   )
}

export default Message;