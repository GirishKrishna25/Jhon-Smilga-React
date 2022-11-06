import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [user, setUser] = useState('');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h2>{user || '1'}</h2>

      {user && <h2>2</h2>}
      {!user && <h2>2 var</h2>}
    </>
  );
};

export default ShortCircuit;
