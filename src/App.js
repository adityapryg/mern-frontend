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
import Todo from './todo/pages/Todo';
import NewTodo from './todo/pages/NewTodo';
import UpdateTodo from './todo/pages/UpdateTodo';
import MainNavigation from './shared/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <React.StrictMode>
        <MainNavigation/>
          <main>
            <Switch>
              <Route exact path="/" component={Users}/>
              <Route exact path="/:userID/todo" component={Todo}/>
              <Route exact path="/todo" component={Todo}/>
              <Route exact path="/todo/new" component={NewTodo}/>
              <Route path="/todo/:todoID" component={UpdateTodo}/>
              <Redirect to='/' />
            </Switch>
          </main>
        </React.StrictMode>
      </Router>
  );
}

export default App;
