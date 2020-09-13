import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
   } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home/Home';
import About from './components/About'
import Main from './components/Main.js/Main';
import UpdateBook from './components/Home/UpdateBook';
import NewBook from './components/Home/NewBook';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Main />
        </div>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
          <Route exact path='/books/new_book' component={ NewBook } />
          <Route exact path='/books/:bookId' component={ UpdateBook }/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
