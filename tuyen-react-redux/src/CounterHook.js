import React from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux';

// actions
import { setIncrement, setDecrement } from './actions/counterActions';

function CounterHook() {
  const dispatch = useDispatch();
  
  const stateNumber = state => state.counter.number;
  const number = useSelector(stateNumber);
  const store = useStore();
  // const number = useSelector(state => state.counter.number);

  console.log(store)

  return (
    <div>
      <h3>Sample with useSelector & useDispatch</h3>
      <div>Number is : {number}</div><br />
      <button type="button" onClick={() => dispatch(setDecrement(2))}>decrement</button>
      <button type="button" onClick={() => dispatch(setIncrement(5))}>increment</button>

      <div>example about useStore: {store.getState().counter.number}</div>
    </div>
  )
}

export default CounterHook
