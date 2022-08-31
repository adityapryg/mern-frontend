import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        value: action.value,
        isValid: true
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
  const [state, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false
  })

  const inputChangeHandler = event => {
    //handleinput using reducer
    dispatch({
      type: 'ONCHANGE',
      value: event.target.value
    })
  }

  const element =
    props.element === 'input' ? (
      <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={inputChangeHandler}
        value={state.value}
      />
    ) : (
      <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={inputChangeHandler}
        value={state.value}
      />
    );

  return (
    <div className={`form-control ${!state.isValid &&
      'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!state.isValid && <span>{props.errorText}</span>}
    </div>
  );
};

export default Input;
