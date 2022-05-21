import style from './../Dialogs.module.css'

const Message = (props) => {
   //let path = 'dialogs/' + props.id;
   
   return (
      <div className={style.dialog}> 
      {props.messageText}
      
      </div>
   )
}

export default Message;