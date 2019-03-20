import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import HeaderFinancialData from './components/header/HeaderFinancialData'
import BakingService from './components/BakingService'
import ReactTableList from './components/ReactTableList'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactForm2 from './components/ContactForm2'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={props =>
              <div>
                <HeaderFinancialData />
                <ReactTableList />
              </div>
            } />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/baking-service' component={BakingService} />
            <Route exact path='/contact' component={ContactForm2} />
          </Switch>
          <Footer />
        </div>
      </Router>


    );
  }
}

export default App;
