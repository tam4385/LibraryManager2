import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
   } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About'
import Main from './components/Main.js/Main';
import BookInfo from './components/Home/BookInfo';
import data from './data.json';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Main />
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/:id' component={BookInfo}/>
      </Switch>
    </Router>
  );
}

export default App;
