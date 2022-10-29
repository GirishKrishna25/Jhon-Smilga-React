import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Girish Krishna',
    aka: 'Spider-Man',
    message: 'With great power comes great responsibility',
  });

  const changeMessage = () => {
    setPerson({
      ...person,
      message: 'if life offers you a lemon, make a lemonade.',
    });
  };

  return (
    <>
      <h5>{person.name}</h5>
      <h5>{person.aka}</h5>
      <h5>{person.message}</h5>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
