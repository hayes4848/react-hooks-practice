import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
 
const decrement = () => {
  setCount(count - 1)
}

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add me
      </button>
      <button onClick={ decrement }>
        Minus Me
      </button>
    </div>
  );
}

export default Example;
