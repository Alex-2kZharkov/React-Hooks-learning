import React, { useState, useEffect } from 'react';

function UseEffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  

  const logMousePosition = (e) => {
    console.log('Mouse moves');
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component was unmouted, event listener was removed');
      window.removeEventListener('mousemove', logMousePosition);
    }; // this function will execute when component will be unmounted, cause it is returned
  }, []); // empty array signals to run side effects only once, when component did mount

  return (
    <div>
      Hooks X - {x}, Y - {y}
    </div>
  );
}

export default UseEffectOnce;
