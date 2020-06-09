import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  // callback function
  console.log(state);
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };

    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };

    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };

    case 'reset':
      return initialState;

    default:
      return state;
  }
};
function UseReducerAnotherCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement by 5
      </button>
      <div>
        <div>{count.secondCounter}</div>
        <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>
          Increment second counter
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>
          Decrement second counter
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default UseReducerAnotherCounter;
