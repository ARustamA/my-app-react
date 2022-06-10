import style from './App.module.css';
import Profile from './components/profiles/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import { Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className={style.appWrapper}>
      <Header />
      <Nav state={props.store.getState()}/>

      <div className={style.wrapperContent}>
        <Routes>
          <Route path='/dialogs/*'
            element={<DialogsContainer store={props.store}/>} />

          <Route path='/profile'
            element={<Profile
              store={props.store}
          />} />

          <Route path='/news'
            element={<News />} />

          <Route path='/users'
            element={<UsersContainer />} />

          <Route path='/setting'
            element={<Setting />} />

          <Route path='/friends'
            element={<Friends state={props.store.getState().dialogsPage}/>} />

        </Routes>

      </div>

    </div>



  );
}

export default App;
