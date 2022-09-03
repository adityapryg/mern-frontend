import React from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/Hooks/Http';
import './TodoItem.css';

const TodoItem = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const confirmDeleteHandler = async () => {
    if( window.confirm('Are you sure deleting this data?') ){
      try {
        await sendRequest(
          `http://localhost:5000/api/todo/${props.id}`,
          'DELETE'
        );
        props.onDelete(props.id);
      } catch (error) {}
      //TODO: delete on database
    } else {
      console.log('Cancel Delete')
    }
  };

  if (error){
    window.alert(error);
    clearError();
  }

  return (
    <li className="todo-item">
      <Card className="todo-item__content">
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="todo-item__info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="todo-item__actions">
          <Button to={`/todo/${props.id}`}>EDIT</Button>
          <Button danger onClick={confirmDeleteHandler} disable={isLoading}>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
