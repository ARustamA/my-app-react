import './index.css';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = (state) => {

   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText ={store.updateNewPostText.bind(store)}/>
         </BrowserRouter>
      </React.StrictMode>
   );
}

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);

reportWebVitals();

