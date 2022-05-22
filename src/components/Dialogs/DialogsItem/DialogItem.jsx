import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
   let path = 'dialogs/' + props.id;

   return (
      <div className={style.dialog + ' ' + style.active}>
         <NavLink to={path}>
            <div className={style.messageAva}>
               {props.ava}
               {props.name}
            </div>

         </NavLink>
      </div>

   )
}


export default DialogItem;