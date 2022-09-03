import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import {
  VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE
} from '../../shared/Helpers/Validator';
import { useForm } from '../../shared/Hooks/Form';
import { useHttpClient } from '../../shared/Hooks/Http';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import './Form.css';

const NewTodo = () => {
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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

  const formSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/todo',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          creator: formState.inputs.creator.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      history.push('/todo');
    } catch (error) {}
  }

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      { error && <div className="center">
          <strong>{error}</strong>
          <button type="button" className="close" onClick={clearError}>×</button>	
        </div>}
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
        <Input
          id="creator" 
          element="input" 
          type="text" 
          label="creator"
          validators={[VALIDATOR_REQUIRE]}
          errorMessage="Creator is required"
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