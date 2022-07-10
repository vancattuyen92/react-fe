import React, { useState } from 'react';

function StatefulComponent() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h2>
        This is stateful component: {count}
        <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
      </h2>
    </div>
  )
}

export default StatefulComponent;
