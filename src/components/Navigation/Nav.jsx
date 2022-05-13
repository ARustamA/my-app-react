import classes  from './Nav.module.css'

const Nav = () => {
  return (
    <nav className = {classes.nav}>
      <ul>
        <li>
          <a href ='/profile' className = {classes.item}>Profile</a>
        </li>
        <li>
          <a href ='/dialogs' className = {classes.item}>Message</a>
        </li>
        <li>
          <a href = '/news' className = {classes.item}>News</a>
        </li>
        <li>
          <a href = '/music' className = {classes.item}>Music</a>
        </li>
        <li>
          <a href = '/setting' className = {classes.item}>Setting</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;