import React from "react";
import { Link } from "react-router-dom";
// import css
import "../Assets/css/sidebar.css";
// impor img
import logoFork from "../Assets/img/fork.png";
import logoClipboard from "../Assets/img/clipboard.png";
import logoAdd from "../Assets/img/add.png";
import ModalAdd from "./ModalAdd";

const Sidebar = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img
          src={logoFork}
          alt="logo-fork"
          onClick={() => props.updateMenu()}
        />
      </div>
      <div className="logo-sidebar">
        <Link to="/history">
          <img src={logoClipboard} alt="logo-clipboard" />
        </Link>
      </div>
      <div className="logo-sidebar">
        <img src={logoAdd} alt="logo-add" onClick={handleShow} />
      </div>
      <ModalAdd
        showModal={show}
        closeModal={handleClose}
        updateMenu={props.updateMenu}
        allCategory={props.allCategory}
      />
    </div>
  );
};

export default Sidebar;
