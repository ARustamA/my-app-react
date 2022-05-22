import style from './../Dialogs.module.css'

const Avatar = (props) => {

   return (

      <div className={style.dialog}>
         {props.avatarData}

      </div>
   )
   
}

export default Avatar;