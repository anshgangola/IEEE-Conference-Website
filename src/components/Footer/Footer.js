import React from "react";
import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.foot}>
        <p>© Copyright 2023 IEEE - All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
        A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology 
        for the benefit of humanity.
        
        </p>
        <a href="https://events.vtsociety.org/about/corporate/governance/p9-26.html">Accessibility</a>
        <a href="https://events.vtsociety.org/about/corporate/governance/p9-26.html">Nondiscrimination Policy</a>
        <a href="https://events.vtsociety.org/about/corporate/governance/p9-26.html">Privacy & Opting Out of Cookies</a>
        </div>

    );
}

export default Footer;