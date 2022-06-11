import Users from "./Users";
import {connect} from 'react-redux'
import usersReduce, {followACreator, unFollowACreator, setUsersACreator} from "../../redux/users-reducer"


let mapStateToProps = (state) => {
   
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return{
      goFollow: (userId)=>{
         dispatch(followACreator(userId))
      },
      goUnFollow: (userId)=>{
         dispatch(unFollowACreator(userId))
      },
      goSetUsers: (users)=>{
         dispatch(setUsersACreator(users))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);