import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Navbar from './components/Navbar';
import Header from './components/Header';

/* Import CSS */
import './style.css';
// <div>
//   <Route exact path="/" component={App} />
//   <Route exact path="/chart" component={Chart} />

// </div>

const Root = function() {
  return (
    <div class="container">
      <div>
        <App />
      </div>
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

render(<Root/>, document.querySelector('#root'));
