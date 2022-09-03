import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import TodoList from "../components/TodoList";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/Hooks/Http";

import './Todo.css';

const Todo = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedTodos, setLoadedTodo] = useState();

    // let userID = useParams().userID;
    // let requestedTodo = [...DUMMY_TODO];

    useEffect(() => {
      const fetchTodos = async () => {
        try {
          const responseData = await sendRequest('http://localhost:5000/api/todo');
          setLoadedTodo(responseData.todos);
        } catch (error) {  }
      }
      fetchTodos();
    }, [sendRequest]);

    return (
      <React.Fragment>
        { error && <div class="center">
          <strong>{error}</strong>
          <button type="button" class="close" onClick={clearError}>×</button>	
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