import React from "react";
import { Link } from "react-router-dom";
// import css
import "../Assets/css/sidebar.css";
// impor img
import logoFork from "../Assets/img/fork.png";
import logoClipboard from "../Assets/img/clipboard.png";
import logoAdd from "../Assets/img/add.png";
import logoLogout from "../Assets/img/logout.png";
import ModalAdd from "./ModalAdd";
import { useSelector, useDispatch } from "react-redux";
import { clearMenuCreator, logoutCreator } from "../redux/actions/action";

const Sidebar = (props) => {
  const auth = useSelector((state) => state.auth);
  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <Link to="/">
          <img src={logoFork} alt="logo-fork" />
        </Link>
      </div>
      {auth.isAdmin ? (
        <div className="logo-sidebar">
          <Link to="/history">
            <img
              src={logoClipboard}
              alt="logo-clipboard"
              onClick={() => dispatch(clearMenuCreator())}
            />
          </Link>
        </div>
      ) : null}

      {auth.isAdmin ? (
        <div className="logo-sidebar">
          <img src={logoAdd} alt="logo-add" onClick={handleShow} />
        </div>
      ) : null}

      <div className="logo-sidebar">
        <img
          src={logoLogout}
          alt="logo-user"
          onClick={() => {
            dispatch(logoutCreator());
            dispatch(clearMenuCreator());
          }}
        />
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
