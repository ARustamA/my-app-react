import style from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  return (
    <div>
      

      <div className={style.item}>
        <img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' alt='' className={style.img_user_cont} />
      </div>
    </div>
  )
}

export default ProfileInfo;