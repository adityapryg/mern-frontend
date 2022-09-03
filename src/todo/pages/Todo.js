import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import TodoList from "../components/TodoList";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import './Todo.css';

const Todo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedTodos, setLoadedTodo] = useState();

    // let userID = useParams().userID;
    // let requestedTodo = [...DUMMY_TODO];

    useEffect(() => {
      const sendRequest = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('http://localhost:5000/api/todo');
          const responseData = await response.json();

          //if not 200'ish response code
          if (!response.ok) {
            throw new Error(responseData.message);
          }
          setLoadedTodo(responseData.todos);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
      }
      sendRequest();
    }, []);

    const errorHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        { error && <div class="center">
          <strong>{error}</strong>
          <button type="button" class="close" onClick={errorHandler}>×</button>	
        </div>}
        
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        <div className="todo">
          <Button to="/todo/new">Create</Button>
        </div>
        {!isLoading && loadedTodos && <TodoList items={ loadedTodos }/>}
      </React.Fragment>
    )
}

export default Todo;