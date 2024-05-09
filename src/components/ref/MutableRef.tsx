import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const stopTimer = () => {
    window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <h3>{seconds}</h3>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
