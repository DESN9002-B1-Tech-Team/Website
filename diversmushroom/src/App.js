import './App.css';
import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Home from './components/pages/home'
import NotFound from './components/pages/404'
import Admin from './components/pages/admin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
