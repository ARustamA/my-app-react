import './App.css';
import Profile from './components/profiles/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element = {<Dialogs dataDialogs={props.dataDialogs}dataMessage={props.dataMessage}/>}/>
            <Route path='/profile' element ={<Profile posts={props.posts}/>}/>
            <Route path='/news' element ={<News />}/>
            <Route path='/music' element ={<Music />}/>
            <Route path='/setting' element ={<Setting />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
