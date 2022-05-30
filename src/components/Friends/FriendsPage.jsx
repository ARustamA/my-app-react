import { NavLink } from 'react-router-dom';
import style from './Friends.module.css'

const FriendsPage = (props) => {
   
   return (
      <div className={style.container}>
         <div> 
            <NavLink to={props.name}>
            {props.name}
            </NavLink>
         <a href='/dialogs' type='button' className={style.button}>go chat</a>
         </div>
      </div>


      // <div className={style.dialog + ' ' + style.active}>

   )
}

export default FriendsPage;