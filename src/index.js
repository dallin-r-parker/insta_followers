import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
import React from 'react';
import App from './App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
