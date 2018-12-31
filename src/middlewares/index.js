import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import timeMiddleware from './timeMiddleware';

export default applyMiddleware(
  thunk,
  timeMiddleware,
);
