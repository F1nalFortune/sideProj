import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import guests from './guests';
import contacts from './contacts';
import mailers from './mailers';


const rootReducer = combineReducers({guests, contacts, mailers, routing: routerReducer });


export default rootReducer;
