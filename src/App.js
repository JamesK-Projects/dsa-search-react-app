import React from 'react';
import TextboxLinear from './TextboxLinear';
import TextboxBinary from './TextboxBinary';

function App() {
  return (
    <div className="App">
      <h1>Search for a number between 1-98</h1>
      <TextboxLinear />
      <TextboxBinary />
    </div>
  );
}

export default App;
