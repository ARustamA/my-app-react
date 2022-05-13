import cla from './Profile.module.css'
import MyPosts from './myPosts/myPosts'

const Profile = () => {
  return (
    <div className={cla.content}>
      <div>
        <div>
          <img src='https://www.studyrama.com/IMG/arton92553.png' className={cla.img__content} />
        </div>

        <div>
          <img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' className={cla.img__user_content} />
        </div>
      </div>
    <MyPosts />
    </div>
  )
}

export default Profile;