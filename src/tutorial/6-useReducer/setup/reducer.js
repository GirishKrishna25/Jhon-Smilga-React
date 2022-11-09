export const reducer = (state, action) => {
  // 'state' contains '[], isModalOpen, modalContent' but we focus on [].
  // 'action' contains 'payload' which contains our newly entered value.
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please add an item',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: 'Please add an person',
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
    };
  }

  // return state; // we can also use this
  throw new Error('no matching action type found');
};
