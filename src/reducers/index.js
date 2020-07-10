import {combineReducers} from 'redux';

//import statements for reducers;
import {homeReducer} from './home-reducer';

export default combineReducers({
  home: homeReducer,
});
