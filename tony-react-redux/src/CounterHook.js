import React from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux';

// actions
import { setIncrement, setDescrement } from './actions/counterActions';

function CounterHook() {
  const dispatch = useDispatch();
  const stateNumber = state => state.counter.number;
  const number = useSelector(stateNumber);
  const store = useStore();
  // const number = useSelector(state => state.counter.number);

  console.log(store)

  return (
    <div>
      <h2>Sample with useSelector & useDispatch</h2>
      <div>Number is : {number}</div><br />
      <button type="button" onClick={() => dispatch(setDescrement(2))}>decrement</button>
      <button type="button" onClick={() => dispatch(setIncrement(5))}>increment</button>

      <div>example about useStore: {store.getState().counter.number}</div>
    </div>
  )
}

export default CounterHook
 