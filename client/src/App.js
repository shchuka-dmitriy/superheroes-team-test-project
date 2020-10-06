import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import SuperheroPage from './pages/SuperheroPage/SuperheroPage';
import Home from './pages/Home/Home';
import browserHistory from './browserHistory';
import './App.css';
import './reset.css';
import CreateHeroPage from "./pages/CreateHeroPage/CreateHeroPage";

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/createHero' component={CreateHeroPage}/>
            <Route exact path='/superhero/:id' component={SuperheroPage}/>
          </Switch>
        </Router>
    );
  }
}

export default App;