import React from 'react';
import {
  /**
   * Sebagai router yang menggunakan API history dari HTML5
   * sehingga dapat menggunakan location untuk mensingkronasi UI dengan url
   */
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
import './App.css';
import NewTodo from './todo/pages/NewTodo';
import Users from './user/pages/Users';


function App() {
  return (
      <Router>
        <Route path="/">
          <Users/>
        </Route>
        <Route path="/todo/new">
          <NewTodo/>
        </Route>
      </Router>
  );
}

export default App;
