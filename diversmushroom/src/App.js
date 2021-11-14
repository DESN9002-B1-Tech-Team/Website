import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial';
import Admin from './components/pages/admin'
import Posts from './components/pages/posts';
import NotFound from './components/pages/404';
import MushroomPackaging from './components/pages/mushroom-packaging';
import MushroomDeadly from './components/pages/mushrooms-deadly-dappering';
import MushroomCardboard from './components/pages/mushroom-cardboard';
import MushroomSpore from './components/pages/mushroom-spore-reuse';
import MushroomBiggest from './components/pages/mushroom-biggest';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutorial" exact component={Tutorial} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/mushrooms-and-packaging" exact component={MushroomPackaging} />
        <Route path="/posts/mushrooms-and-cardboard" exact component={MushroomCardboard} />
        <Route path="/posts/mushrooms-biggest" exact component={MushroomBiggest} />
        <Route path="/posts/mushrooms-spore-reuse" exact component={MushroomSpore} />
        <Route path="/posts/mushrooms-deadly-dappering" exact component={MushroomDeadly} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
