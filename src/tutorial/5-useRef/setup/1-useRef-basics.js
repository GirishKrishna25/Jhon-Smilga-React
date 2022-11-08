import React, { useEffect, useRef } from "react";

// to set up uncontrolled inputs
// works lot like useState
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  // after reload the pointer focus will be at the input field.
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={inputRef} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
