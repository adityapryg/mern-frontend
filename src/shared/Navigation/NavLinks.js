import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>USERS</NavLink>
    </li>
    <li>
      <NavLink to="/todo" exact>TODO</NavLink>
    </li>
    <li>
      <NavLink to="/todo/new">ADD TODO</NavLink>
    </li>
    <li>
      <NavLink to="/auth">AUTH</NavLink>
    </li>
  </ul>
};

export default NavLinks;