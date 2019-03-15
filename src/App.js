import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SimpleAppBar from './components/navbar/SimpleAppBar'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header'
import Contact from './components/Contact'
import OurOffer from './components/OurOffer'
// import ReactTable3 from './components/ReactTable3'
import ReactTableTestDetached from './playground/ReactTableTestDetached'

import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={props =>
              <div>
                <Header />
                <ReactTableTestDetached />
              </div>
            } />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/our-offer' component={OurOffer} />
          </Switch>
          <Footer />
        </div>
      </Router>


    );
  }
}

export default App;
