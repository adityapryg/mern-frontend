import React, { useReducer,useEffect } from 'react';

import { validate } from '../Helpers/Validator';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validation)
      };
    case 'LEAVING':
      return {
        ...state,
        isLeaving: true
      };
    default:
      return state;
  }
}

const Input = props => {

  // const [inputValue, setInputValue] = useState('');
  // const [isValid, setIsValid] = useState('');
  /**
   * useReducer for more complex managing state
   */
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isLeaving: false,
    isValid: false
  })

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const inputChangeHandler = event => {
    //handleinput using reducer
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validation: props.validators
    })
  }

  const leaveInputHandler = () => {
    dispatch({
      type: 'LEAVING'
    });
  };

  const element =
    props.element === 'input' ? (
      <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={inputChangeHandler}
        onBlur={leaveInputHandler}
        value={inputState.value}
      />
    ) : (
      <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={inputChangeHandler}
        onBlur={leaveInputHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${
        !inputState.isValid && 
        inputState.isLeaving &&
        'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isLeaving && <span>{props.errorMessage}</span>}
    </div>
  );
};

export default Input;
