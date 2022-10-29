import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title');
  const clickHandler = () => {
    title === 'Random Title' ? setTitle('New Title') : setTitle('Random Title');
  };
  return (
    <>
      <h2>{title}</h2>;
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
