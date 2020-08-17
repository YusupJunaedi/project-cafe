import React from "react";
// import css
import "../Assets/css/headerHome.css";
// import img
import logoImg from "../Assets/img/menu.png";
import logoSearch from "../Assets/img/magnifying-glass.png";

const HeaderHome = () => {
  return (
    <div className="header">
      <div className="logo-menu">
        <img src={logoImg} alt="Logo-Menu" />
      </div>
      <div className="title-header">
        <p>Food Items</p>
      </div>
      <div className="logo-search">
        <img src={logoSearch} alt="logo-search" />
      </div>
      <div className="title-cart">
        <p>Cart 2</p>
      </div>
    </div>
  );
};

export default HeaderHome;
