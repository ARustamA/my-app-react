
import style from './Users.module.css'

const Users = (props) => {
   return(
      <div className={style.header}>
         {
            props.users.map(u => 
            <div key={u.id}>
                  <span> 
                     <img className={style.item} src={u.photoUrl} alt="#" />
                     <div>{u.fullName}</div>
                     <div>{u.usersStatus}</div>
                     <div>{u.location}</div>
                  </span>
                  <div>
                     { u.followed ?  <a  className={style.button} 
                                       onClick={ ()=> { props.goUnFollow(u.id) } }>UnFollow</a> 
                                 :  <a className={style.button} 
                                       onClick={ ()=> { props.goFollow(u.id) } }>Follow</a>}

                     
                  </div>
               
            </div>)
         }
      </div>
   )
}

export default Users;