import style from './Post.module.css'


const Post = (props) => {

  return (
    <div className={style.item}>
      <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png' alt='' className={style.user__ava} />
      {props.message}
      <div>
        <span className={style.like}>
          {props.likesCount}like
        </span>
      </div>
    </div>
  )
}

export default Post;