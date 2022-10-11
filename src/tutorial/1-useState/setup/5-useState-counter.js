import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  function decrease() {
    setValue((prevValue) => prevValue - 1);
  }
  function reset() {
    setValue(0);
  }
  function increase() {
    setValue((prevValue) => prevValue + 1);
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={increase}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
