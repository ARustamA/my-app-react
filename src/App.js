import './App.css';
import Profile from './components/profiles/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav state={props.state.dialogsPage}/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*'
            element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />

          <Route path='/profile'
            element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
          />} />

          <Route path='/news'
            element={<News />} />

          <Route path='/music'
            element={<Music />} />

          <Route path='/setting'
            element={<Setting />} />

          <Route path='/friends'
            element={<Friends state={props.state.dialogsPage}/>} />

        </Routes>

      </div>

    </div>



  );
}

export default App;
