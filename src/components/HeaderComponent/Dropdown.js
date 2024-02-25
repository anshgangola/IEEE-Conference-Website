import React, { useState } from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ submenu }) {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleOpen = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleClose = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust the delay duration as desired
  };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button className={styles.dropdownToggle} onMouseEnter={handleOpen}>
        &#9662;
      </button>
      {isOpen && (
        <ul
          className={styles.dropdownMenu}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          {submenu.map((item) => (
            <li key={item.title}>
              <a href={item.url} className={styles.dropdownLink}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
    
}


export default Dropdown;
