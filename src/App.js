import './App.css';
import Profile from './components/profiles/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';



const App = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
}

export default App;
