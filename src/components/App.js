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
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryNu: null };
    console.log('App constructor');
  }

  myCallback = (catNo) => {
    console.log('catNo', catNo);
    this.setState( {categoryNu: catNo} )
    console.log('after setState', this.state);
  }
  render() {
    if (this.state.categoryNu) {
      return (
          <Category categoryNu={this.state.categoryNu} />
      );
    }
    console.log('on render', this.state);
    return (
      <BrowserRouter>
        <Navbar />
        <Header siteName="BREWVANA" />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/Crawler" component={Crawler} /> */}
          <Route exact path="/Chart"
            render={() => <Chart myCallback={this.myCallback} categoryNu={this.state.categoryNu} />} />
          <Route path="/search/:searchTerm" component={App} />
          <Route path="/beer/:beerId" component={Single} />
          <Route path="/category/:categoryId"
            render={() => {
              console.log("in category route render", this.state.categoryNu);
              return <Category categoryNu={this.state.categoryNu} />}} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
