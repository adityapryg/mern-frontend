import React from 'react';

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
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
          <Button to={`/todo/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
