import React from 'react';

import Card from '../../shared/UIElements/Card';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = props => {
  if (props.items.length === 0) {
    return (
      <div className="todo-list center">
        <Card>
          <h2>Congratulations! No todo left</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {props.items.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          onDelete={props.onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
