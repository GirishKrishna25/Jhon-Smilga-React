// gives more structure to our state and this really helps. if we are dealing with a big project.
// rely on redux.
// once we dispatch the action (present in the form of object with a 'type' inside and additional values are added as 'payload'), reducer will handle that action and return some state.

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // we replace the above two states with useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      // if we don't return a state in reducer function, we can't do the following steps.
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h5>{person.name}</h5>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
