import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/FormElements/Button";
import TodoList from "../components/TodoList";

import './Todo.css';

const DUMMY_TODO = [
  {
    id: 'tid1',
    title: 'Belajar React',
    description: 'Membangun interface aplikasi todo list',
    creator: 'uid1'
  },
  {
    id: 'tid2',
    title: 'Belajar Express Node',
    description: 'Membangun REST API',
    creator: 'uid2'
  }
]

const Todo = () => {

    let userID = useParams().userID;
    let requestedTodo = [...DUMMY_TODO];
    return (
      <section>
        <div className="todo">
          <Button to="/todo/new">Create</Button>
        </div>
        <TodoList 
          items={ userID ? requestedTodo.filter(todo => todo.creator === userID) : DUMMY_TODO} 
        />
      </section>
    )
}

export default Todo;