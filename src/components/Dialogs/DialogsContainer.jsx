import {updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

// const DialogsContainer = (props) => {

//    let state = props.store.getState().dialogsPage;

//    let onClickSendMessage = () => {
//       props.store.dispatch( sendMessageCreator())
//    }
   
//    let onNewMessageChange = (textFromEvent) => {
//       props.store.dispatch( updateNewMessageTextCreator(textFromEvent) )
//    }
//    return (
//       <Dialogs updateNewMessageText = {onNewMessageChange}
//                sendMessage = {onClickSendMessage}
//                dialogsPage = {state}/>

//    )
// }

let mapStateToProps = (state)=> {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch)=> {

   return {

      sendMessage: () =>{
         dispatch( sendMessageCreator())
      },
      updateNewMessageText: (textFromEvent) =>{
         dispatch( updateNewMessageTextCreator(textFromEvent) )
      },
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;