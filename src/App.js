import './App.css';
import Profile from './components/profiles/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element = {<Dialogs />}/>
            <Route path='/profile' element ={<Profile />}/>
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
