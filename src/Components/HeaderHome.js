import React from "react";
// import css
import "../Assets/css/headerHome.css";
// import img
import logoImg from "../Assets/img/menu.png";
import logoSearch from "../Assets/img/magnifying-glass.png";

import { useSelector, useDispatch } from "react-redux";
import { getAllMenuCreator, clearMenuCreator } from "../redux/actions/action";

import ModalSearch from "../Components/ModalSearch";

const HeaderHome = (props) => {
  const carts = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <div className="logo-menu">
          <img src={logoImg} alt="Logo-Menu" />
        </div>
        <div className="title-header">
          <p
            onClick={() => {
              dispatch(clearMenuCreator());
              dispatch(getAllMenuCreator());
            }}
          >
            Food Items
          </p>
        </div>
        <div className="logo-search">
          <img src={logoSearch} alt="logo-search" onClick={handleShow} />
        </div>
        <div className="title-cart">
          <p>
            Cart{" "}
            <span className="badge badge-pill badge-primary">
              {carts.length}
            </span>
          </p>
        </div>
      </div>
      <ModalSearch
        showModal={show}
        closeModal={handleClose}
        // searchMenu={(name, by) => props.searchMenu(name, by)}
      />
    </>
  );
};

export default HeaderHome;
