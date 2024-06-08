import React, { useState, useRef, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevCounterRef = useRef(counter);


  useEffect(() => {
    if (counter > prevCounterRef.current) {
      directionRef.current = "up";
    } else if (counter < prevCounterRef.current) {
      directionRef.current = "down";
    }
    prevCounterRef.current = counter; 
  }, [counter]);


  useEffect(() => {
    if (directionRef.current !== null) {
      console.log("Direction of change:", directionRef.current);
    }
  }, [directionRef.current]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
