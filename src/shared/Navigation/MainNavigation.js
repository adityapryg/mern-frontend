import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">MERN Todolist</Link>
      </h1>
      <nav>
        {/* TodoL Add NavLinks here */}
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
