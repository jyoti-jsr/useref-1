import { useRef, useState, useEffect } from "react";

const ImplimentingStopWatch = () => {
  const [count, setCount] = useState(0);
  let timerInterval;

  const handleStart = () => {
    timerInterval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const handleStop = () => {
    setCount(0);
    clearInterval(timerInterval);
  };

  useEffect(() => {
    return () => clearInterval(timerInterval);
  }, []);
  return (
    <>
      <h2>timer : {count}</h2>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </>
  );
};
export default ImplimentingStopWatch;
