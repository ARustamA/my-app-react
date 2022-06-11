const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {

   users: [
      // { id: 1, photos: userPhoto, followed: true, name: 'Aisy',    tatus:'hi, I miss you', location: "Ufa"},
      // { id: 2, photos: userPhoto, followed: true, name: 'Ruslan',   tatus:'winter is coming', location:  "Ufa"},
      // { id: 3, photos: userPhoto, followed: true, name: 'Vlad',    tatus:'hi, I need my phone', location:  "Ufa"},
      // { id: 4, photos: userPhoto, followed: true, name: 'Zulf',    tatus:'Yo yo yo', location:  "Ufa"},
      // { id: 5, photos: userPhoto, followed: false, name: 'Fidan',   tatus:'goodbye', location:  "Ufa"},
      // { id: 6, photos: userPhoto, followed: false, name: 'Vildan',  tatus:'I do not understand you', location:  "Ufa"},
   ],

   
};

const usersReduce = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
      return  {...state, 
                  users: state.users.map( (user) => {
                     if(user.id === action.userId){
                        return {...user, followed:  true}
                     }
                     return user
                  } )
      }}
      case UNFOLLOW: {
         return  {...state, 
            users: state.users.map( (user) => {
               if(user.id === action.userId){
                  return {...user, followed: false}
               }
               return user
            } )
      }}
      case SET_USERS: {
         
         return {...state, users:[...state.users, ...action.users],
         }

      }

      default:
         return state
   }
}


   export const followACreator = (userId) => ({ type: FOLLOW, userId})

   export const unFollowACreator = (userId) => ({ type: UNFOLLOW, userId })

   export const setUsersACreator = (users) => ({ type: SET_USERS, users })

   export default usersReduce