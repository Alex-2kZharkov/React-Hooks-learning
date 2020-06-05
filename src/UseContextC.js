import React, { useContext } from 'react';
import { Name } from './App';

function UseContextC() {
  const name = useContext(Name); // extracting value from context that defined in App.js
  return <div>My name is {name}</div>;
}
export default UseContextC;
