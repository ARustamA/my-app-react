
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer   store={props.store}
                          // posts={props.profilePage.PostData} 
                          // newPostText={props.profilePage.newPostText}
                          // dispatch={props.dispatch}
      />
      
    </div>
  )
}

export default Profile;