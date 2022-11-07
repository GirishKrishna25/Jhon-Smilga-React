import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'Girish Krishna'}</h1>
      {text && <h1>Hello World</h1>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Error Toggle
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h3>There is an Error</h3> : <h3>There is no Error</h3>}
    </>
  );
};

export default ShortCircuit;
