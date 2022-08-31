import React, {useReducer, useCallback} from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import {
  VALIDATOR_MINLENGTH
} from '../../shared/Helpers/Validator';

import './NewTodo.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewTodo = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      <form>
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