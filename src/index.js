import React from 'react';
//import ReactDOM from 'react-dom';
import App from './asyncLoading/AppLoading';
import * as serviceWorker from './serviceWorker';
import("react-dom").then(ReactDOM => {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
});
