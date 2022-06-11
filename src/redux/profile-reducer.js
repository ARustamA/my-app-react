const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';

let initialState =
{
   PostData: [
      { id: 1, message: 'hi, I miss you', likesCount: 4 },
      { id: 2, message: 'winter is coming', likesCount: 5 },
      { id: 3, message: 'hi, I need my phone', likesCount: 6 },
      { id: 4, message: 'Yo yo yo', likesCount: 2 },
      { id: 5, message: 'goodbye', likesCount: 1 },
      { id: 6, message: 'I do not understand you', likesCount: 3 },
   ],

   newPostText: '',
};

const profileReduce = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         
         let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 5
         };
         return {    ...state,
                     PostData: [...state.PostData, newPost],
                     newPostText: ''
         }}
      case UPDATE_POST: {
         return {    ...state,
                  newPostText: action.newText
         }}
      default:
         return state
   }
}
   //    if (action.type === ADD_POST){
   //       let newPost = {
   //          id: 5,
   //          message: state.newPostText,
   //          likesCount: 0,
   //       }
   //       let copyState = {...state}
   //       copyState.PostData = [...state.PostData]
   //       copyState.PostData.push(newPost)
   //       copyState.newPostText = ''

   //    } else if (action.type === UPDATE_POST){
   //       let copyState = { ...state }
   //       copyState.newText = action.newText;
   //    }

   //    return state;
   // }

   export const addPostActionCreator = () => ({ type: ADD_POST })

   export const updateNewPostCreator = (text) => ({ type: UPDATE_POST, newText: text })


   export default profileReduce