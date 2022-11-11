import React, { useState, useEffect } from 'react';
// 'useFetch' is a custom hook and it should start with 'use' keyword.
// otherwise, it would be like a normal function and in normal function we can't use the states.
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
