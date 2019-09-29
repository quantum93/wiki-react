import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

  ReactDOM.render((
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/search/:searchTerm" component={App} />
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));

serviceWorker.unregister();
