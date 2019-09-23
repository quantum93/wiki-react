import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Search from './components/Search';

import { BrowserRouter, Route } from 'react-router-dom';

  ReactDOM.render((
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
