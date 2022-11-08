import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: '',
    age: '',
    email: '',
  })
  const [people, setPeople] = useState([]);
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // if all fields have truthy value then we  add 'id' in 'person' and save it in 'people' array
    if (person.firstName && person.age && person.email) {
      const newPerson = {...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({
        firstName: '',
        age: '',
        email: '',
      })  
    } else {
      alert(
        `
          Please fill all the fields.
          firstName: ${person.firstName}
          age: ${person.age}
          email: ${person.email}
        `
      );
    }
  };
  
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, age, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
