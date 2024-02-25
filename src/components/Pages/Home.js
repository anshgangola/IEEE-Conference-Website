import React from "react";
import HomeCarousel from "../Home/Caraousel/Home Caraousel";
import Content from "../Home/Middle/Content";
import Organizer from "../Home/Organizers/Organizers";
import styles from './Home.module.css';
import CountDown from "../Home/CountDown/CountDown";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
     <HomeCarousel></HomeCarousel>
       <div className={styles.home}>
       <div className={styles.left}>
      
      <Content></Content>
      <Organizer></Organizer>
      </div>
      <div className={styles.right}>
       <CountDown></CountDown>
       <h4>IMPORTANT DATES</h4>
       <h6>Paper Submission:</h6>
       <p className={styles.rightp}>20 January 2024</p>
       <h6>Acceptance Notification:</h6>
       <p className={styles.rightp}>10 February 2024</p>
       <h6>Camera Ready</h6>
       <p className={styles.rightp}>6 March 2024</p>
       <hr></hr>
       <h6>Workshop Proposals:</h6>
       <p className={styles.rightp}>25 January 2024</p>
       <h6>Tutorial Proposals:</h6>
       <p className={styles.rightp}>5 February 2024</p>
       <h6>Technical Panel Proposals:</h6>
       <p className={styles.rightp}>15 February 2024</p>
       
      </div>
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default Home;
