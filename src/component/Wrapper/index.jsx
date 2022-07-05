import React, { useState, useRef } from "react";
import Navbar from "../Navbar/index";
import Sidebar from "../SideBar/index";
import styles from "./wrapper.module.css";

const Index = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleOpenMenu = () => {
    setOpen(!open);
    menuRef.current.style.display = open === false ? "none" : "block";
  };

  return (
    <div className="w-full relative">
      <Navbar handleOpenMenu={handleOpenMenu} />

      <div className="flex mt-10">
        <div className={`${styles.sidebarBox}`}>
          <Sidebar menuRef={menuRef} />
        </div>
        <div className={`${styles.contentBox}`}>{children}</div>
      </div>
    </div>
  );
};

export default Index;
