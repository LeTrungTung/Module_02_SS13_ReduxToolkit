import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
} from "../redux/reducer/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleDecreaseClick = () => {
    const deAction = decreaseCount();
    dispatch(deAction);
  };
  const handleIncreaseClick = () => {
    const inAction = increaseCount();
    dispatch(inAction);
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {counter ? <p>{counter}</p> : <p>0</p>}
      <button className="btn" onClick={handleIncreaseClick}>
        Increase
      </button>
      <button className="btn" onClick={handleDecreaseClick}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
