const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';


const profileReduce = (state, action) =>{

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

export const UpdateNewPostCreator = (text) => ({ type: UPDATE_POST, newText:text })


export default profileReduce;