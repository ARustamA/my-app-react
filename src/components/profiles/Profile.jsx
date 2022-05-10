import cla from './Profile.module.css'

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <div>
          <img src='https://www.studyrama.com/IMG/arton92553.png' className={cla.img__content} />
        </div>

        <div>
          <img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' className={cla.img__user_content} />
        </div>
    </div>
    <div>my posts
      <div>New post</div>
      <div className={cla.posts}>
        <div className={cla.item}>post 1</div>
        <div className={cla.item}>post 2</div>
      </div>
    </div>

    </div>
  )
}

export default Profile;