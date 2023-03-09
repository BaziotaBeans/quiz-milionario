import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(60);
  }, [questionNumber]);

  return (
    <div className={styles.containerTimer}>
      <div className={styles.timer}>{timer}</div>
    </div>
  );
}

export default Timer;
