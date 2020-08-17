import React from "react";
// import css
import "../Assets/css/sidebar.css";
// impor img
import logoFork from "../Assets/img/fork.png";
import logoClipboard from "../Assets/img/clipboard.png";
import logoAdd from "../Assets/img/add.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src={logoFork} alt="logo-fork" />
      </div>
      <div className="logo-sidebar">
        <img src={logoClipboard} alt="logo-clipboard" />
      </div>
      <div className="logo-sidebar">
        <img src={logoAdd} alt="logo-add" />
      </div>
    </div>
  );
};

export default Sidebar;
