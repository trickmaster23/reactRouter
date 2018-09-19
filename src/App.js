import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
