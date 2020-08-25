import React from "react";
import logoImg from "../Assets/img/menu.png";

import "../Assets/css/headerHistory.css";

const HeaderHistory = () => {
  return (
    <>
      <div className="header">
        <div className="logo-menu">
          <img src={logoImg} alt="Logo-Menu" />
        </div>
        <div className="title-header-history">
          <p>History</p>
        </div>
      </div>
    </>
  );
};

export default HeaderHistory;
