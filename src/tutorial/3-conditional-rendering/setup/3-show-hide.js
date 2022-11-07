import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // clean-up function
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []); // we are using toggle. so its best to use cleanup along with [].

  return (
    <>
      <h1>Window</h1>
      <h2>Size: {size}px</h2>
    </>
  );
};

export default ShowHide;
