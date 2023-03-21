import React, {useState} from "react";
import {useSelector , useDispatch} from 'react-redux'
import { actionTypes } from "../redux/constants/actionTypes";
import {increment , decrement} from '../redux/action/counterAction'
function Counter(props) {
  
  const state = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    
    dispatch(increment(state.count+1))
    console.log(state)
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {

    dispatch(decrement(state.count-1))
  };

  return (
    <center>
        <div>
      <h3>Hello from Counter</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {state.count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button >Reset</button>
    </div>
    </center>
  );
}

export default Counter;
