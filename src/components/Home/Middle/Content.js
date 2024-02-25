import React from "react";
import styles from "./Content.module.css";
import CountDown from "../CountDown/CountDown";

function Content() {
  return (
    <>
      
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
       
        
        
      </div>
      <hr className={styles.break}></hr>
      <div className={styles.overall}>
      <div className={styles.work}>
        <h5>LOREM WORKSHOP</h5>
        <p>
          Lorem ipsum dolor sit amet,F consectetur adipiscing elit.
          <br /> Vivamus nulla eros, consequat ut gravida tempor.
        </p>
        <button>Register here</button>
        

      </div>
      <div className={styles.work}>
      <h5>SPECIAL SESSION</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
          Vestibulum viverra.
        </p>
        <button>View Speakers</button>
      </div>
      </div>
     
      <div className={styles.last}>
        <hr className={styles.break}></hr>
      </div>
    </>
  );
}

export default Content;
