import React,{useState} from "react";
import styles from "./Header.module.css";
import Links from "./Links";
import Logo from "../../assets/Logo.png";
import Navbar from "./Navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {menuItems} from './MenuItems';

function Header() {
  const [showIcon,setShowIcon]=useState(false);

  const clickHandler=()=>{
    setShowIcon(!showIcon);
  }
  return (
    <div className={styles.head}>
      <Links></Links>
      <div className={styles.logo}>
        <img src={Logo} alt="IEEE_LOGO" className={styles.logoImg}></img>
        <div className={styles.hamburger}>
        <a href="#" onClick={clickHandler}><FontAwesomeIcon size='2x' icon={faBars}></FontAwesomeIcon></a>
        </div>
      </div>
      <Navbar menuItems={menuItems} onToggle={showIcon} />
     
    </div>
  );
}

export default Header;
