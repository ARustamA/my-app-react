import { combineReducers, legacy_createStore } from "redux";
import profileReduce from './profile-reducer'
import dialogsReduce from './dialogs-reducer'
import sidebarReduce from './sidebar-reducer';

let redusers = combineReducers({
   profilePage: profileReduce,
   dialogsPage: dialogsReduce,
   sidebarData: sidebarReduce,
   
});

let store = legacy_createStore(redusers);

export default store;