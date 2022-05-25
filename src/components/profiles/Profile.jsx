// import cla from './Profile.module.css'
import MyPosts from './myPosts/myPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts  posts={props.profilePage.PostData} 
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                />
      
    </div>
  )
}

export default Profile;