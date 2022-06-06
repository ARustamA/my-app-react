import { combineReducers, legacy_createStore } from 'redux';
import profileReduce from './profile-reducer'
import dialogsReduce from './dialogs-reducer'
import sidebarReduce from './sidebar-reducer';

let state = combineReducers({
   profilePage: profileReduce,
   dialogsPage: dialogsReduce,
   sidebarData: sidebarReduce,
   
});

let store = legacy_createStore(state);
window.store = store;
export default store;