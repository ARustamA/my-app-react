import style  from './Header.module.css'

const Header = () => {
  return (
    <header className = {style.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' className={style.img__logo} />
        
        <img src='https://www.studyrama.com/IMG/arton92553.png' alt='' className={style.imgCont} />
      
      </header>
  )
}

export default Header;