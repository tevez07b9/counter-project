import React, { useState, useEffect, useRef } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalId = useRef<NodeJS.Timeout>();

  // call this on every update of `isRunning`
  useEffect(() => {
    if (isRunning) {
      // update the counter on every interval: 1s
      intervalId.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => {
      // making sure to clear the interval on unmount
      // also a good place to do cleanup, remove any listners is used
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [isRunning]);

  // a simple toggle function
  const handleStartPause = (): void => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Reset the entire counter
  const handleReset = (): void => {
    setCounter(0);
    setIsRunning(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  // counting sheeps 🐏, coz it's fun 😅
  return (
    <div>
      <h2>
        Counter: {counter} 🐏 {counter > 3 ? "😴" : ""}
      </h2>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
