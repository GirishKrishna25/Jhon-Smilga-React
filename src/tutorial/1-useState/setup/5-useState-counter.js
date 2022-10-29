import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  function decrease() {
    setValue(value - 1);
  }
  function reset() {
    setValue(0);
  }
  function increase() {
    setValue(value + 1);
  }

  function increaseLater() {
    // after the time provided in millisecs, callback function will run
    // if we directly provide the value like 'value + 1', no matter how many times
    // you click on the button, it only increment once.
    // but if we use this functional approach, our value matches with clicks.
    setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
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

      <section style={{ margin: '4rem 0' }}>
        <h2>Complex Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={increaseLater}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
