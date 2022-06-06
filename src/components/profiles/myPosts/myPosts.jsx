import style from './MyPosts.module.css'
import Post from './post/Post';
import React from 'react';



const MyPosts = (props) => {

  let PostsElement = props.PostData.map((Posts) => <Post message={Posts.message} likesCount={Posts.likesCount} key={Posts.id}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
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