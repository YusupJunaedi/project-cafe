import React from "react";
import food from "../Assets/img/food-and-restaurant.png";

import "../Assets/css/listCart.css";
import ModalCheckout from "./ModalChekout";

import {
  deleteALLCartCreator,
  updateInvoiceCreator,
  plusQtyCreator,
  minusQtyCreator,
} from "../redux/actions/action";

import { useSelector, useDispatch } from "react-redux";

const ListCart = (props) => {
  const carts = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePlus = (id) => {
    const index = carts.findIndex((item) => {
      return item.id_product === id;
    });

    dispatch(plusQtyCreator(index));
  };

  const handleMinus = (id) => {
    const index = carts.findIndex((item) => {
      return item.id_product === id;
    });
    dispatch(minusQtyCreator(index));
  };

  if (carts.length === 0) {
    return (
      <div className="col-4 col-md-4 border-list-cart">
        <div className="row">
          <div className="col-12 col-md-12 mt-3 text-center">
            <img src={food} alt="img-food" className="img-food" />
            <p className="title-isempty">Your cart is empty</p>
            <p className="title-pleaseAdd">
              Please add some items from the menu
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="list-cart">
          {carts.map((item) => {
            return (
              <div className="col-12 col-md-12 mt-3" key={item.id_product}>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="img-cart-list">
                      <img
                        src={item.img_product}
                        alt="img_menu"
                        className="img-cart"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-4 title-cart">
                    <p>{item.name_product}</p>
                    <div className="btn-group btn-list">
                      <button
                        className="button"
                        onClick={() => {
                          handleMinus(item.id_product);
                        }}
                      >
                        -
                      </button>
                      <span className="jml">{item.qty}</span>
                      <button
                        className="button"
                        onClick={() => {
                          handlePlus(item.id_product);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 text-right">
                    <p className="total-item">
                      Rp. {item.price_product * item.qty}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 mt-5">
                <p className="title-bold">Total :</p>
              </div>
              <div className="col-6 col-md-6 text-right mt-5">
                <p className="title-bold">
                  Rp.
                  {carts.reduce((total, item) => {
                    return total + item.price_product * item.qty;
                  }, 0)}
                </p>
              </div>
              <div className="col-12 col-md-12">
                <p className="title-ppn">*Belum termasuk ppn</p>
              </div>
              <div className="col-12 col-md-12 text-center">
                <button
                  className="btn btn-block bg-blueSky"
                  onClick={() => {
                    dispatch(updateInvoiceCreator());
                    handleShow();
                  }}
                >
                  CheckOut
                </button>
              </div>
              <div className="col-12 col-md-12 text-center mt-2">
                <button
                  className="btn btn-block bg-pink"
                  onClick={() => dispatch(deleteALLCartCreator())}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <ModalCheckout showModal={show} closeModal={handleClose} />
      </>
    );
  }
};

export default ListCart;
