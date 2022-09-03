import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/Helpers/Validator";
import { useForm } from '../../shared/Hooks/Form';
import { useHttpClient } from "../../shared/Hooks/Http";
import './Form.css';

const UpdateTodo = () => {
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedTodo, setLoadedTodo] = useState();
  let todoID = useParams().todoID;

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
    const fetchTodo = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/todo/${todoID}`);
        setLoadedTodo(responseData.todo)
        setFormData(
          {
            title: {
              value: responseData.todo.title,
              isValid: true
            },
            description: {
              value: responseData.todo.description,
              isValid: true
            }
          },
          true
        )
      } catch (error) {}
    };
    fetchTodo();
  }, [sendRequest, todoID, setFormData])

  const formSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/todo/${todoID}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      history.push('/todo')
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if(!loadedTodo && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Todo with ID {todoID} not found!</h2>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <h2>{error}</h2>
        <button type="button" onClick={clearError}>×</button>	
      </div>
    );
  }

  return (
    <div className="todo-form">
      <h2 className="center">Update Todo</h2>
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