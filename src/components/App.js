import React from "react";
import Header from "./Header";
import Youtube from "./Youtube";
import Navbar from './Navbar';
import Main from './Main';
import Chart from './Chart';
import Single from './Single';
import Category from './Category';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Page404 from './Page404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryNu: null, beerName: '' };
    // console.log('App constructor');
  }

  myCallback = (catNo) => {
    console.log('catNo', catNo);
    this.setState( {categoryNu: catNo} )
    console.log('after setState', this.state);
  }

  myBeer = (beerName) => {
    this.setState( { ...this.state, beerName: beerName} )
  }

  render() {
    console.log('on App render', this.props);
    // window.location enforces re-initialization after this.setState. So,
    // it redirect separately after onElementsClick!
    if (this.state.categoryNu !== null) {
      console.log(this.state.categoryNu);
       return <Category categoryNu={this.state.categoryNu} />
     }
      console.log('on render', this.state.categoryNu);
      return (
        <BrowserRouter>
          <Navbar beerName={this.state.beerName} />
          <Header siteName="BREWVANA" />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Youtube"
              render={() => <Youtube beerName={this.state.beerName} />} />

            <Route exact path="/Chart"
              render={() => <Chart myCallback={this.myCallback} categoryNu={this.state.categoryNu} />} />

            <Route path="/search/:searchTerm" component={App} />
            <Route path="/beer/:beerId"
              render={(localProps) => <Single {...localProps} myBeer={this.myBeer} />} />

            <Route path="/category/:categoryId"
              render={() => {
                // console.log("in category route render", this.state.categoryNu);
                return <Category categoryNu={this.state.categoryNu} />}} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      );

  }
}

export default App;
