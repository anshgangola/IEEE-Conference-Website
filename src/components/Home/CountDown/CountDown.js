import React, { useState, useRef, useEffect } from "react";
import styles from "./CountDown.module.css";

function CountDown() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Jan 10, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setDays(day);
        setHours(hour);
        setMins(min);
        setSecs(sec);
      } else {
        clearInterval(interval.current);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section>
        <p>{days}</p>
        <p>
          <small>Days</small>
        </p>
      </section>
      <span>:</span>

      <section>
        <p>{hours}</p>
        <p>
          <small>Hours</small>
        </p>
      </section>
      <span>:</span>

      <section>
        <p>{mins}</p>
        <p>
          <small>Minutes</small>
        </p>
      </section>
      <span>:</span>
      <section>
        <p>{secs}</p>
        <p>
          <small>Seconds</small>
        </p>
      </section>
    </div>
  );
}

export default CountDown;
