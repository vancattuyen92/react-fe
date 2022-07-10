import React, { useState } from 'react';

function LearnStateHooks() {
  const [count, setCount] = useState(0);

  console.log(count)
  return (
    <div>
      <h2> Learn State Hook</h2>
      <button type="button" onClick={() => setCount(count + 1)}>Click count</button>
      <p>You click {count} times</p>
    </div>
  )
}

export default LearnStateHooks
