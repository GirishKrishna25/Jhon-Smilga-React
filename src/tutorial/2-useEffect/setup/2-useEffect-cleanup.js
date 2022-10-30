import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    // whenever the event 'resize' is listened, checkSize function will invoke
    // re-sizing the window is a side effect.
    // but this rise the memory leak
    window.addEventListener('resize', checkSize);
    // so we use clean up function
    // first this will run
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h2>WINDOW</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
