import { useState } from 'react';
import clsx from 'clsx';
import myStyles from './myStyle1.module.css';

export default function SampleScores() {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h2 
        // className={myStyles.title}
        className={clsx(
          'h2-container',
          myStyles.title,
          count > 5 ? 'black' : 'white'
        )}
      >
        Sample Scores
      </h2>
      this is sample scores: {count}
      <button type="button" onClick={() => setCount(count + 1)}>set count</button>
    </div>
  )
}