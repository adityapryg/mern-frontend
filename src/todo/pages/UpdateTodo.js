import React from "react";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/Helpers/Validator";

import './Form.css';
import { useParams } from "react-router-dom";

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
  let todoID = useParams().todoID;
  let todoByID = DUMMY_TODO.find((todo) => todo.id === todoID);

  if (todoByID.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Todo with ID {todoID} not found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="todo-form">
      <h2 className="center">Create New Todo</h2>
      <form onSubmit={() => {}}>
        <Input 
          id="title" 
          element="input" 
          type="text" 
          label="title"
          validators={[VALIDATOR_REQUIRE(1)]}
          errorMessage="Title is required"
          onInput={() => {}}
          initialValue={todoByID.title}
          initialIsValid={true}
        />
        <Input
          id="description" 
          element="textarea" 
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Description is required and minimum have 5 characters"
          onInput={() => {}}
          initialValue={todoByID.description}
          initialIsValid={true}
        />
        <Button type="submit" disabled={true}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UpdateTodo;