import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './Components/About';

ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About}/>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
