import cla from './Profile.module.css'
import MyPosts from './myPosts/myPosts'

const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <img src='https://www.studyrama.com/IMG/arton92553.png' alt='' className={cla.img_cont} />
        </div>

        <div>
          <img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' alt='' className={cla.img_user_cont} />
        </div>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;