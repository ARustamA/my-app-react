import React from 'react';
import {addPostActionCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let OnAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts  addPost={OnAddPost} 
              onPostChange={onPostChange}
              newPostText={state.profilePage.newPostText}
              PostData={state.profilePage.PostData}/>
  )
}

export default MyPostsContainer;