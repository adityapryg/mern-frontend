import React from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/Helpers/Validator';

import './NewTodo.css';

const NewTodo = () => {
  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      <form>
        <Input 
          id="title" 
          element="input" 
          type="text" 
          label="title"
          validators={[VALIDATOR_REQUIRE]}
          errorMassage="Title is required">
        </Input>
        <Input 
          id="description" 
          element="textarea" 
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMassage="Description is required and minimum have 5 characters">
        </Input>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
};

export default NewTodo;