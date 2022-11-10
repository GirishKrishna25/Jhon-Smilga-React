// createContext() (we can provide a default value, if we want)
// once we create a context, we'll be able to access two components called 'Provider' and 'consumer'. (we replace 'consumer' with 'useContext' hook)
// 'Provider' acts as a distributor and we have to wrap it at the root. And it has a 'value' attribute in which we can pass our values as many as we want.
// These values are accessed using 'useContext' hook.

import React, { useState, createContext, useContext } from 'react';
import { data } from '../../../data';

const PersonContext = createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext()</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
