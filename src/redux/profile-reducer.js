const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';

let initialState =
{
   PostData: [
      { id: 1, message: 'hi, I miss you', likesCount: 4 },
      { id: 2, message: 'winter os coming', likesCount: 5 },
      { id: 3, message: 'hi, I need my phone', likesCount: 6 },
      { id: 4, message: 'Yo yo yo', likesCount: 2 },
      { id: 5, message: 'goodbye', likesCount: 1 },
      { id: 6, message: 'I do not understand you', likesCount: 3 },
   ],

   newPostText: '',
};

const profileReduce = (state = initialState, action) =>{

   if (action.type === ADD_POST){
      let newPost = {
         id: 5,
         message: state.newPostText,
         likesCount: 0,
      }
      state.PostData.push(newPost);
      state.newPostText = '';

   } else if (action.type === UPDATE_POST){
      state.newPostText = action.newText;
   }

   return state;
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostCreator = (text) => ({ type: UPDATE_POST, newText:text })


export default profileReduce;