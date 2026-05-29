import React from 'react'
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => { setCount(count + 1);}, 2000);
    setTimeout(() => { console.log(count)}, 2000);
    
  }

  return (
    <>
      <button onClick={handleClick}>
        {count}
      </button>
    </>
  )
}
