import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeInitialValue from './const/store';
import reducers from './reducers';
import middlewares from './middlewares'
import './index.css';
import { App } from './components/';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  storeInitialValue,
  composeWithDevTools(middlewares),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
