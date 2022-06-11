import * as axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../img/ava.png'

debugger
let Users = (props) => {
   
   if (props.users.length === 0) {

      // props.goSetUsers([
      // { id: 1, photos: userPhoto, followed: true, name: 'Aisy',    status:'hi, I miss you', location: "Ufa"},
      // { id: 2, photos: userPhoto, followed: true, name: 'Ruslan',   status:'winter is coming', location:  "Ufa"},
      // { id: 3, photos: userPhoto, followed: true, name: 'Vlad',    status:'hi, I need my phone', location:  "Ufa"},
      // { id: 4, photos: userPhoto, followed: true, name: 'Zulf',    status:'Yo yo yo', location:  "Ufa"},
      // { id: 5, photos: userPhoto, followed: false, name: 'Fidan',   status:'goodbye', location:  "Ufa"},
      // { id: 6, photos: userPhoto, followed: false, name: 'Vildan',  status:'I do not understand you', location:  "Ufa"},
      // ])
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
         props.goSetUsers(response.data.items)
      })
   }
   
   return (
      <div className={style.header}>
         {
            props.users.map(u =>
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
                        onClick={() => { props.goUnFollow(u.id) }}>UnFollow</a>
                        : <a className={style.button}
                           onClick={() => { props.goFollow(u.id) }}>Follow</a>}


                  </div>

               </div>)
         }
      </div>
   )
}

export default Users;