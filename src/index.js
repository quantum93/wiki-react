import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Single from './components/Single';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import Crawler from './components/Crawler';
import Category from './components/Category';

import { BrowserRouter, Route } from 'react-router-dom';

/* Import CSS */
import './style.css';

const Root = function() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/crawler" component={Crawler} />
        <Route path="/search/:searchTerm" component={App} />
        <Route path="/beer/:beerId" component={Single} />
        <Route path="/category" component={Category} />
      </div>
    </BrowserRouter>
  );
};

render(<Root/>, document.querySelector('#root'));
