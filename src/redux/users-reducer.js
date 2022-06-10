const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {

   users: [
      { id: 1, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png', 
         followed: true, fullName: 'Aisy',    usersStatus:'hi, I miss you', location: "Ufa"},
      { id: 2, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
         followed: true, fullName: 'Ruslan',   usersStatus:'winter is coming', location:  "Ufa"},
      { id: 3, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
         followed: true, fullName: 'Vlad',    usersStatus:'hi, I need my phone', location:  "Ufa"},
      { id: 4, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
         followed: true, fullName: 'Zulf',    usersStatus:'Yo yo yo', location:  "Ufa"},
      { id: 5, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
         followed: false, fullName: 'Fidan',   usersStatus:'goodbye', location:  "Ufa"},
      { id: 6, photoUrl:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
         followed: false, fullName: 'Vildan',  usersStatus:'I do not understand you', location:  "Ufa"},
   ],

   
};

const usersReduce = (state = initialState, action) => {
debugger
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
         return {...state, users: [ ...state.users, ...action.users]}

      }

      default:
         return state
   }
}


   export const followACreator = (userId) => ({ type: FOLLOW, userId})

   export const unFollowACreator = (userId) => ({ type: UNFOLLOW, userId })

   export const setUsersACreator = (userId) => ({ type: SET_USERS, userId })

   export default usersReduce