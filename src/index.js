import './index.css';
import store from './redux/redux-store';
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
            <App store = {store} />
         </BrowserRouter>
      </React.StrictMode>
   );
}

reRenderEntireTree(store.getState());

store.subscribe( () => {
   let state = store.getState();
   reRenderEntireTree(state);

});
   
reportWebVitals();

