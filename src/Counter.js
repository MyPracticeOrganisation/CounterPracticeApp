import "./App.css";
import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startCounter = () => {
    setIsRunning(true);
  };
  const stopCounter = () => {
    setIsRunning(false);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setCounter(counter + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, counter]);

  return (
    <div className="App">
      <header className="App-header">
        <label>{counter}</label>
        <div className="buttons">
          <button onClick={startCounter}>Start</button>
          <button onClick={stopCounter}>Stop</button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default Counter;
