import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Index.css';
import App from './asyncLoading/AppLoading';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    AppReducer
   ,applyMiddleware(sagaMiddleware),
  );
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
