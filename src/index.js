import './index.css';
import state from './redux/state';
import {reRenderEntireTree} from './Render'
import reportWebVitals from './reportWebVitals';

reRenderEntireTree(state);

reportWebVitals();

