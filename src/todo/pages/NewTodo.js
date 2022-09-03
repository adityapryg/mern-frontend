import React from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import {
  VALIDATOR_MINLENGTH
} from '../../shared/Helpers/Validator';
import { useForm } from '../../shared/Hooks/Form';
import './Form.css';

const NewTodo = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const formSubmitHandler = event => {
    event.preventDefault();
    console.table(formState.inputs) //TODO: Kirim data ke Backend
  }

  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      <form onSubmit={formSubmitHandler}>
        <Input 
          id="title" 
          element="input" 
          type="text" 
          label="title"
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorMessage="Title is required"
          onInput={inputHandler}
        />
        <Input
          id="description" 
          element="textarea" 
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Description is required and minimum have 5 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </form>
    </div>
  )
};

export default NewTodo;