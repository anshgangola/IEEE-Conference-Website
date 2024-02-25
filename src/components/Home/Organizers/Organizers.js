import React from "react";
import First from "../../../assets/person1.png";
import Second from "../../../assets/person2.png";
import styles from "./Organizers.module.css";

function Organizer() {
  return (
    <div className={styles.divide}>
      <div className={styles.subsec}>
        <img src={First} alt="person1"></img>
        <span>
          <h5>CHAIR PERSON</h5>
          <h6>Lorem Ipsum</h6>
          <p>Intel Corporation</p>
        </span>
      </div>

      <div className={styles.subsec}>
        <img src={Second} alt="person1"></img>
        <span>
          <h5>CHAIR PERSON</h5>
          <h6>Lorem Ipsum</h6>
          <p>Intel Corporation</p>
        </span>
      </div>
    </div>
  );
}

export default Organizer;
