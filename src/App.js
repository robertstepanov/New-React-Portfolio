import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "fontsource-roboto";

import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import { Route } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <Nav />
      <Router>
      <Route exact path='/'><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/work'><Work /></Route>
      <Route path='/contact'><Contact /></Route>
      </Router>
      {/* <header className="App-header">
    <Button variant="contained" color="primary">Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
