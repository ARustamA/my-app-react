import cl  from './Header.module.css'

const Header = () => {
  return (
    <header className = {cl.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' className={cl.img__logo} />
      </header>
  )
}

export default Header;