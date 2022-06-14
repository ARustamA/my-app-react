import * as axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../img/ava.png'
import React from 'react'

class Users extends React.Component{

   constructor(props){
      super(props)
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.goSetUsers(response.data.items)
         })
   }
   
   
   render(){
      return (
         <div className={style.header}>
            
            {
               this.props.users.map(u =>
                  <div key={u.id}>
                     <span>
                        <img  className={style.item}
                              src={u.photos.small!= null ? u.photos.small : userPhoto} />
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{"u.location"}</div>
                     </span>
                     <div>
                        {u.followed ? <a className={style.button}
                           onClick={() => { this.props.goUnFollow(u.id) }}>UnFollow</a>
                           : <a className={style.button}
                              onClick={() => { this.props.goFollow(u.id) }}>Follow</a>}
   
   
                     </div>
   
                  </div>)
            }
         </div>
      )
   }
}


export default Users;