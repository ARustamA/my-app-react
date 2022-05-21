import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostData = [
  {id: 1, message: 'hi, I miss you', likesCount: 4},
  {id: 2, message: 'winter os coming', likesCount: 5},
  {id: 3, message: 'hi, I need my phone', likesCount: 6},
  {id: 4, message: 'Yo yo yo', likesCount: 2},
  {id: 5, message: 'goodbye', likesCount: 1},
  {id: 6, message: 'I do not understand you', likesCount: 3},
]

let dialogsData = [
  {id: 1, name: 'Aisy'},
  {id: 2, name: 'Ruslan'},
  {id: 3, name: 'Vlad'},
  {id: 4, name: 'Zulf'},
  {id: 5, name: 'Fidan'},
  {id: 6, name: 'Vildan'},
]

let messageData = [
  {id: 1, message: 'hi, I miss you'},
  {id: 2, message: 'winter os coming'},
  {id: 3, message: 'hi, I need my phone'},
  {id: 4, message: 'Yo yo yo'},
  {id: 5, message: 'goodbye'},
  {id: 6, message: 'I do not understand you'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={PostData} dataDialogs={dialogsData} dataMessage={messageData}/>
  </React.StrictMode>
);

reportWebVitals();

