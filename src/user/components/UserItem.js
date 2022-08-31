import React from 'react';

import Card from '../../shared/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <Card className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.todoCount} {props.todoCount === 1 ? 'Todo' : 'Todos'}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default UserItem;
