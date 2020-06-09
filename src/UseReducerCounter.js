import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  // callback function
  console.log(state);
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return initialState;

    default:
      return state;
  }
};
function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState); // first reducer
  const [count2, dispatch2] = useReducer(reducer, initialState); // seconds reducer
  return (
    <div>
      <div>First counter: {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>Second counter: {count2}</div>
      <button onClick={() => dispatch2('increment')}>
        Increment second counter
      </button>
      <button onClick={() => dispatch2('decrement')}>
        Decrement second counter
      </button>
      <button onClick={() => dispatch2('reset')}>Reset second counter</button>
    </div>
  );
}

export default UseReducerCounter;
