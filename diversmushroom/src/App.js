import './App.css';
import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Posts from './components/pages/posts';
import NotFound from './components/pages/404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
