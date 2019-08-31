import React from 'react';
//import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./router/index";
//const hist = createBrowserHistory();
function App() {
  return (
    <Router>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
  );
}

export default App;
