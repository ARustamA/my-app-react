import { NavLink } from 'react-router-dom';
import style  from './Nav.module.css'

const Nav = () => {
  return (
    <nav className = {style.nav}>
      <ul>
        <li>
          <NavLink to='/profile' className = {navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' className = {navData => navData.isActive ? style.active : style.item}>Message</NavLink>
        </li>
        <li>
          <NavLink to= '/news' className = {navData => navData.isActive ? style.active : style.item}>News</NavLink>
        </li>
        <li>
          <NavLink to= '/music' className = {navData => navData.isActive ? style.active : style.item}>Music</NavLink>
        </li>
        <li>
          <NavLink to= '/setting' className = {navData => navData.isActive ? style.active : style.item}>Setting</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;