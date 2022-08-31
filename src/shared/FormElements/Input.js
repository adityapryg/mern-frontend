import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        value: action.val,
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
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false
  })

  const inputChangeHandler = event => {
    //handleinput
  }

  const element =
    props.element === 'input' ? (
      <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={inputChangeHandler}
      />
    ) : (
      <textarea 
        id={props.id} 
        rows={props.rows || 3} 
      />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
