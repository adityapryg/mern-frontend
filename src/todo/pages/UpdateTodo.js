import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/Helpers/Validator";
import { useForm } from '../../shared/Hooks/Form';

import './Form.css';

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

const UpdateTodo = () => {
  const [isLoading, setIsLoading] = useState(true);
  let todoID = useParams().todoID;
  let todoByID = DUMMY_TODO.find((todo) => todo.id === todoID);

  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    setFormData(
      {
        title: {
          value: todoByID.title,
          isValid: true
        },
        description: {
          value: todoByID.description,
          isValid: true
        }
      },
      setIsLoading(false)
    )
  }, [setFormData, todoByID])

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (todoByID.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Todo with ID {todoID} not found!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
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
          validators={[VALIDATOR_REQUIRE(1)]}
          errorMessage="Title is required"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialIsValid={formState.inputs.title.isValid}
        />
        <Input
          id="description" 
          element="textarea" 
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Description is required and minimum have 5 characters"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialIsValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UpdateTodo;