import React, { useEffect, useReducer } from 'react'

import * as actionsTypes from './types';
import  { initialState, reducer } from './reducer';

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter, isLoading, isSuccess, isDisabled } = state;

  useEffect(() => {
    if(counter > 50) {
      dispatch({
        type: actionsTypes.SET_SUCCESS, // required
        payload: true // optional
      })
      dispatch({
        type: actionsTypes.SET_DISABLED, // required
        payload: true // optional
      })
    }
  }, [counter])

  function increment() {
    dispatch({
      type: actionsTypes.SET_LOADING, // required
      payload: true // optional
    })
    dispatch({
      type: 'INCREMENT', // required
    })
    setTimeout(() => {
      dispatch({
        type: actionsTypes.SET_LOADING, // required
        payload: false // optional
      })
    }, 500);
  }

  function decrement() {
    dispatch({
      type: actionsTypes.SET_LOADING, // required
      payload: true // optional
    })
    dispatch({
      type: 'DECREMENT', // required
    })
    setTimeout(() => {
      dispatch({
        type: actionsTypes.SET_LOADING, // required
        payload: false // optional
      })
    }, 500);
  }

  function setPlusFive() {
    dispatch({
      type: actionsTypes.SET_LOADING, // required
      payload: true // optional
    })
    dispatch({
      type: actionsTypes.PLUS_FIVE, // required
    })
    setTimeout(() => {
      dispatch({
        type: actionsTypes.SET_LOADING, // required
        payload: false // optional
      })
    }, 500);
  }

  function setPlusTen() {
    dispatch({
      type: actionsTypes.SET_LOADING, // required
      payload: true // optional
    })
    dispatch({
      type: actionsTypes.PLUS_TEN, // required
    })
    setTimeout(() => {
      dispatch({
        type: actionsTypes.SET_LOADING, // required
        payload: false // optional
      })
    }, 500);
  }

  function resetCounter() {
    dispatch({
      type: actionsTypes.SET_LOADING, // required
      payload: true // optional
    })
    dispatch({
      type: actionsTypes.RESET_COUNTER, // required
    })
    dispatch({
      type: actionsTypes.SET_DISABLED, // required
      payload: false // optional
    })
    dispatch({
      type: actionsTypes.SET_SUCCESS, // required
      payload: false // optional
    })
    setTimeout(() => {
      dispatch({
        type: actionsTypes.SET_LOADING, // required
        payload: false // optional
      })
    }, 500);
  }

  return (
    <div>
      Click on time: {' '}
      {isLoading ? <span>...loading</span> : counter} {' '}
      {isSuccess && <span>Congratulation</span>}

      <br />
      <br />
      <button type="button" disabled={isDisabled} onClick={increment}>Increment</button>  {' '}
      <button type="button" disabled={isDisabled} onClick={decrement}>Decrement</button>  {' '}
      <button type="button" disabled={isDisabled} onClick={setPlusFive}>set + 5</button>  {' '}
      <button type="button" disabled={isDisabled} onClick={setPlusTen}>set + 10</button>  {' '}
      <button type="button" onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default UseReducerCounter
