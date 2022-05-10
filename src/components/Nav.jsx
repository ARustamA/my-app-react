import classes  from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href='#' className={classes.item}>Profile</a>
        </li>
        <li>
          <a href='#' className={classes.item}>Message</a>
        </li>
        <li>
          <a href='#' className={classes.item}>News</a>
        </li>
        <li>
          <a href='#' className={classes.item}>Music</a>
        </li>
        <li>
          <a href='#' className={classes.item}>Setting</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;