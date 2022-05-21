import style from './myPosts.module.css'
import Post from './post/Post';


const MyPosts = (props) => {

  let PostsElement = props.posts.map( (Posts) => <Post message={Posts.message} likesCount={Posts.likesCount}/>)

  return (
    <div posts={style.content}>

      <div className={style.item}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <a href="#" className="button">Add post</a>
        </div>

        <div  className={style.posts}>
          {PostsElement}

        </div>
      </div>

    </div>
  )
}

export default MyPosts;