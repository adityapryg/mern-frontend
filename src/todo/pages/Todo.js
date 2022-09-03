import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import TodoList from "../components/TodoList";

import './Todo.css';

const Todo = () => {
    const [loadedTodos, setLoadedTodo] = useState();

    // let userID = useParams().userID;
    // let requestedTodo = [...DUMMY_TODO];

    useEffect(() => {
      const sendRequest = async () => {
        const response = await fetch('http://localhost:5000/api/todo');
        const responseData = await response.json();

        //if not 200'ish response code
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedTodo(responseData.todos)
      }
      sendRequest();
    }, []);

    return (
      <section>
        <div className="todo">
          <Button to="/todo/new">Create</Button>
        </div>
        <TodoList 
          items={ loadedTodos } 
        />
      </section>
    )
}

export default Todo;