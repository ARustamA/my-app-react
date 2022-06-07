import {addPostActionCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   let OnAddPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     let action = updateNewPostCreator(text);
//     props.store.dispatch(action);
//   }

//   return (
//     <MyPosts  addPost={OnAddPost} 
//               onPostChange={onPostChange}
//               newPostText={state.profilePage.newPostText}
//               PostData={state.profilePage.PostData}/>
//   )
// }
debugger
let mapStateToProps = (state)=> {
  return {
    PostData: state.profilePage.PostData,
    newPostText:state.profilePage.newPostText
  }
} 

let mapDispatchToProps = (dispatch) => {

  return {
    onPostChange: (text) => {
      let action = updateNewPostCreator(text);
          dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





export default MyPostsContainer;