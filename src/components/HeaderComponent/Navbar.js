import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Dropdown from "./Dropdown";

function Navbar(props) {
  const showNav = props.onToggle;
  const location = useLocation();

  return (
    <ul className={`${styles.nav} ${showNav ? styles.mobile : ""}`}>
      {props.menuItems.map((item) => (
        <li key={item.title} className={styles.navItem}>
          <div className={styles.navLinkContainer}>
            <NavLink
              exact  
              to={item.url}
              className={
                location.pathname === item.url 
                  ? `${styles.active} ${styles.navLink}`
                  : styles.navLink
              }
              activeClassName={styles.active}
            >
              {item.title}
            </NavLink>
            {item.submenu && <Dropdown submenu={item.submenu} />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
