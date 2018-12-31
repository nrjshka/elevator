import { combineReducers } from 'redux';
import elevatorReducer from './elevatorReducer';
import queueReducer from './queueReducer';
import timerReducer from './timerReducer';

export default combineReducers({
  queue: queueReducer,
  elevator: elevatorReducer,
  timer: timerReducer,
});
