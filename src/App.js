import React from 'react';
import './App.css';
import DataFetching from './DataFetching';
import UseContexB from './UseContexB';

export const Name = React.createContext('');  // creating context
function App() {
  return (
    <div className='App'>
      <Name.Provider value={'Erkeaim'}> {/* define value for context */}
        <UseContexB />
      </Name.Provider>
    </div>
  );
}

export default App;
