import React from 'react';
import './assets/css/Index.css';
import './config/Global';
//import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./router/index";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
//const hist = createBrowserHistory();
const store = createStore(
  AppReducer
  , applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>

    </Provider>

  );
}

export default App;
