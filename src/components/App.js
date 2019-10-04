import React from "react";
import Results from "./Results";
import Search from "./Search";
import Header from "./Header";
import Crawler from "./Crawler";
import Navbar from './Navbar';
import Main from './Main';
import Chart from './Chart';
import Single from './Single';
import Category from './Category';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Header siteName="BREWVANA" />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Crawler" component={Crawler} />
          <Route exact path="/Chart" component={Chart} />
          <Route path="/search/:searchTerm" component={App} />
          <Route path="/beer/:beerId" component={Single} />
          <Route path="/category/:categoryId" component={Category} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
