import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
