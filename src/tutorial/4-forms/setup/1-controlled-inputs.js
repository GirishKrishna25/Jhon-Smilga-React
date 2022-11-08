import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

// controlled-inputs means getting the values as we enter.
// for this we need useState, value, onChange
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    // when we submit the form, page automatically refreshers and to prevent that we use,
    e.preventDefault();
    if (firstName && email) {
      // both works fine
      // setPeople([...people, {firstName, email}]);
      setPeople((prevPeople) => {
        const id = new Date().getTime().toString();
        return [...prevPeople, { id, firstName, email }];
        // return [...prevPeople, {firstName:firstName, email:email}]
      });
      setFirstName('');
      setEmail('');
    } else {
      alert(
        `
         Please don't leave input fields Empty
         name: ${firstName}
         email: ${email}
        `
      );
    }
  };

  // we can write submit at the form / button. both works same.
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={submitHandler}>
            Add Person
          </button>
        </form>
      </article>

      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
