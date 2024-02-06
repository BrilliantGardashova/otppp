import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeInSeconds((Time) => (Time > 0 ? Time - 1 : Time));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${Number(minutes)}:${Number(seconds)}`;
  };

  const Number = (number) => {
    return number.toString().padStart(2, '0');
  };

  const restartTimer = () => {
    setTimeInSeconds(initialTime);
  };

  return (
    <div>
      <h1>Таймер</h1>
      <p>{formatTime(timeInSeconds)}</p>
      <button onClick={restartTimer}>Рестарт</button>
    </div>
  );
};

export default Timer;
