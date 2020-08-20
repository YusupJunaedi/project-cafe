import React from "react";
import food from "../Assets/img/food-and-restaurant.png";

import "../Assets/css/listCart.css";
import ModalCheckout from "./ModalChekout";

const ListCart = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (props.arrCarts.length === 0) {
    return (
      <div className="col-4 col-md-4 border-list-cart">
        <div className="row">
          <div className="col-12 col-md-12 mt-3 text-center">
            <img src={food} alt="img-food" class="img-food" />
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
          {props.arrCarts.map((item) => {
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
                          props.handleMinus(item.id_product);
                        }}
                      >
                        -
                      </button>
                      <span className="jml">{item.qty}</span>
                      <button
                        className="button"
                        onClick={() => {
                          props.handlePlus(item.id_product);
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
                  {props.arrCarts.reduce((total, item) => {
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
                  onClick={handleShow}
                >
                  CheckOut
                </button>
              </div>
              <div className="col-12 col-md-12 text-center mt-2">
                <button
                  className="btn btn-block bg-pink"
                  onClick={props.clearCart}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <ModalCheckout
          arrCarts={props.arrCarts}
          showModal={show}
          closeModal={handleClose}
          clearCart={props.clearCart}
        />
      </>
    );
  }
};

export default ListCart;
