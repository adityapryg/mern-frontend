import React from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";

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
    console.log(userID);
    let requestedTodo = DUMMY_TODO.filter(todo => todo.creator === userID)
    return (
        <TodoList items={requestedTodo} />
    )
}

export default Todo;