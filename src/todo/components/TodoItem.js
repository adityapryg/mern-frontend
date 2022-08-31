import React from 'react';

import Card from '../../shared/UIElements/Card';
import './TodoItem.css';

const TodoItem = props => {
  return (
    <li className="todo-item">
      <Card className="todo-item__content">
        <div className="todo-item__info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="todo-item__actions">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
