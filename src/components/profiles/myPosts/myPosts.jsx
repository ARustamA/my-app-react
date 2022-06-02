import style from './MyPosts.module.css'
import Post from './post/Post';
import React from 'react';
import {addPostActionCreator, UpdateNewPostCreator } from '../../../redux/state';


const MyPosts = (props) => {

  let PostsElement = props.posts.map((Posts) => <Post message={Posts.message} likesCount={Posts.likesCount} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostCreator(text);
    props.dispatch(action);
  }


  return (
    <div posts={style.content}>

      <div className={style.item}>
        <h3>My posts</h3>
        <div>

          <div>
            <textarea
              onChange={onPostChange}
              placeholder='leave your mark'
              ref={newPostElement}
              value={props.newPostText}
            />
          </div>

          <a onClick={addPost}
            // onClick={() => addPost(newPostElement.current.value)}
            type='button' className={style.button}>Add post
          </a>
        </div>

        <div className={style.posts}>
          {PostsElement}

        </div>
      </div>

    </div>
  )
}

export default MyPosts;