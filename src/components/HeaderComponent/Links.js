import React from "react";
import styles from "./Links.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Links() {
  return (
    <div className={styles.cover}>
      <ul className={styles.link}>
        <li className={styles.list}>
          <a href="http://www.ieee.org">IEEE.org</a>
        </li>
        <li className={styles.list}>
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">
            IEEE Xplore Digital Library
          </a>
        </li>
        <li className={styles.list}>
          <a href="https://standards.ieee.org">IEEE Standards</a>
        </li>
        <li className={styles.list}>
          <a href="https://spectrum.ieee.org">IEEE Spectrum</a>
        </li>
        <li className={styles.list}>
          <a href="https://www.ieee.org/sitemap.html?WT.mc_id=mn_smap">
            More Sites
          </a>
        </li>
      </ul>
      <ul className={styles.social}>
        <a href="https://www.facebook.com/IEEE.LNMIIT">
          <FontAwesomeIcon
            className={styles.ficon}
            icon={faFacebook}
            size="lg"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/ieee_lnmiit/">
          <FontAwesomeIcon
            className={styles.ficon}
            icon={faInstagram}
            size="lg"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/company/ieee-sb-lnmiit/">
          <FontAwesomeIcon
            className={styles.ficon}
            icon={faLinkedinIn}
            size="lg"
          ></FontAwesomeIcon>
        </a>
      </ul>
    </div>
  );
}

export default Links;
