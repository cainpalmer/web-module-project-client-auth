import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/Friends';

function App() {
  return (
    <Router>
      <div classname = 'App'>
        <Link to = '/login'>Login</Link>
        <Link to = '/'>Home</Link>
        <div>
          <Switch>
            <Route path = '/login'>
              <Login />
            </Route>
            <PrivateRoute path = '/protected' component = {FriendList} />
            <Route path = '/'></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
