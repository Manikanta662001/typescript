import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
    setStartTime(0);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleLap = () => {
    const newLapTime = elapsedTime;
    setLaps([...laps, newLapTime]);
  };
  const formatTime = (milliSeconds: number) => {
    const totalSeconds = Math.floor(milliSeconds / 1000);
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    const centiseconds = Math.floor((milliSeconds % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${seconds}.${centiseconds}`;
  };
  useEffect(() => {
    let intervalId: NodeJS.Timer | undefined;
    if (isRunning) {
      const now = Date.now();
      const offset = now - startTime + elapsedTime;
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - now + offset);
      }, 10);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);
  return (
    <div>
      <h1>StopWatch</h1>
      <p>{formatTime(elapsedTime)}</p>
      <Button
        variant="contained"
        onClick={isRunning ? handlePause : handleStart}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>{" "}
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>{" "}
      <Button variant="contained" onClick={handleLap}>
        Lap
      </Button>{" "}
      {laps.length > 0 && (
        <div>
          <h2>Laps</h2>
          {laps.map((lap, ind) => {
            return <p key={lap}>{`${ind + 1}. ${formatTime(lap)}`}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default StopWatch;
