import cla from './myPosts.module.css'
import Post from './post/Post';


const MyPosts = () => {
  return (
    <div posts = {cla.content}>
    
      <div>my posts
        <div>
          <textarea></textarea>
          <a href="#" className="button">Add post</a>
        </div>

        <div className = {cla.posts}>
          <Post message = 'hi, how are you'  likesCount = '5'/>
          <Post message = 'it is my first post' likesCount = '15'/>
          <Post />
          <Post />          
        </div>
      </div>

    </div>
  )
}

export default MyPosts;