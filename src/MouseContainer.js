import React, { useState } from 'react';
import UseEffectOnce from './UseEffectOnce';

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffectOnce />}
      {/*       using this example to demonstrate how
       useEffect cleanup works*/}
    </div>
  );
}

export default MouseContainer;
