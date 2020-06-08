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
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;
