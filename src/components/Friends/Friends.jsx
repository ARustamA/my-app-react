import style from './Friends.module.css';
import FriendsPage from './FriendsPage';



const Friends = (props) => {
   
   let friendsData = props.state.dialogsData.map(
      (dialog) => <FriendsPage name={dialog.name} id={dialog.id} ava={dialog.ava}/>)
   return (
      <div>
      <div className={style.title}>
         Friends list
         </div>
         {friendsData} 
        
      </div>  
         
      
   )
}

export default Friends;