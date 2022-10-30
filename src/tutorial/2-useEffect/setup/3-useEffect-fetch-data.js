import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json)
      .then((data) => console.log(data));
  });

  const [users, setUsers] = useState([]);
  return <h2>fetch data</h2>;
};

export default UseEffectFetchData;
