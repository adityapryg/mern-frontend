import React from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';

import './NewTodo.css';

const NewTodo = () => {
  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      <form>
        <Input id="title" element="input" type="text" label="title"></Input>
        <Input id="description" element="textarea" label="description"></Input>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
};

export default NewTodo;