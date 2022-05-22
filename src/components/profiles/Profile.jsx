// import cla from './Profile.module.css'
import MyPosts from './myPosts/myPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.PostData} addPost={props.addPost}/>
      
    </div>
  )
}

export default Profile;