import React, { useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  const timerId = useRef()

  const handleStartStop = () => {
    if(!isRunning) {
        timerId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      stopTimer();
    }
    setIsRunning(prev => !prev)
  };

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if(seconds) {
      setSeconds(0);
      setIsRunning(false)
    }
  };

  return (
    <div>
      <section>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        
        <button onClick={resetTimer}>Reset</button>
        <h1>Seconds : {seconds}</h1>
      </section>
    </div>
  );
};

export default Timer;
