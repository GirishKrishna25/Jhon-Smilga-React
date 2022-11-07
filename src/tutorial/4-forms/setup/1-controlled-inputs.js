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

  const submitHandler = (e) => {
    // when we submit the form, page automatically refreshers and to prevent that we use,
    e.preventDefault();
    alert(
      `
       form Submitted.
       name: ${firstName}
       email: ${email}
      `
    );
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
    </>
  );
};

export default ControlledInputs;
