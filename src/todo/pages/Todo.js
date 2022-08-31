import React from "react";
import TodoList from "../components/TodoList";

const Todo = () => {
    const DUMMY_TODO = [
      {
        id: 'tid1',
        title: 'Belajar React',
        description: 'Membangun interface aplikasi todo list'
      },
      {
        id: 'tid2',
        title: 'Belajar Express Node',
        description: 'Membangun REST API'
      }
    ]
    return (
        <TodoList items={DUMMY_TODO} />
    )
}

export default Todo;