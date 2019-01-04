import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import timeMiddleware from './timeMiddleware';
import elevatorMiddleware from './elevatorMiddleware';

export default applyMiddleware(
  thunk,
  timeMiddleware,
  elevatorMiddleware,
);
