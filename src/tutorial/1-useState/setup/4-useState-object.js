import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Girish Krishna',
    aka: 'Spider-Man',
    age: 25,
  });

  function clickHandler() {
    setPerson({...person, age: 26})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.aka}</h3>
      <h3>{person.age}</h3>
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
};

export default UseStateObject;
