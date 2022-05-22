import style from './MyPosts.module.css'
import Post from './post/Post';
import React from 'react';



const MyPosts = (props) => {

  let PostsElement = props.posts.map((Posts) => <Post message={Posts.message} likesCount={Posts.likesCount} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div posts={style.content}>

      <div className={style.item}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <button onClick={() => props.addPost(newPostElement.current.value)} 
            type='button' className={style.button}>Add post</button>
        </div>

        <div className={style.posts}>
          {PostsElement}

        </div>
      </div>

    </div>
  )
}

export default MyPosts;