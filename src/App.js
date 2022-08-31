import React from 'react';
import {
  /**
   * Sebagai router yang menggunakan API history dari HTML5
   * sehingga dapat menggunakan location untuk mensingkronasi UI dengan url
   */
  BrowserRouter as Router, 
  Route,
  /**
   * membungkus node Route
   * Hanya merender 1 route dengan path yang cocok dengan url
   */
  Switch,
  //Handle apabila url/path tidak tersedia
  Redirect
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewTodo from './todo/pages/NewTodo';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Users/>
          </Route>
          <Route path="/todo/new" exact>
            <NewTodo/>
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
  );
}

export default App;
