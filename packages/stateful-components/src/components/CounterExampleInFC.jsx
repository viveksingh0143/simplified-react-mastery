import React, { useState } from 'react'

function CounterExampleInFC() {
  const [count, setCount] = useState(0);
  

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" className="rounded bg-indigo-500 px-2 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default CounterExampleInFC;