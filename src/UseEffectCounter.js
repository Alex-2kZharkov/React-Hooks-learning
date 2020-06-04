import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('Works only if state or props are change');
    document.title = `You clicked button ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br></br>
      <button onClick={() => setCount(count + 1)}>
        You clicked me {count}
      </button>
    </div>
  );
}

export default UseEffectCounter;
