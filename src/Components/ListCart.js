import React from "react";

import "../Assets/css/listCart.css";

const ListCart = (props) => {
  // let totalPrice;
  // const total = props.arrCarts.map((item) => {
  //   return (totalPrice = +item.price_product);
  // });

  // console.log(totalPrice);
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
              <p className="title-bold">Rp. 90000</p>
            </div>
            <div className="col-12 col-md-12">
              <p className="title-ppn">*Belum termasuk ppn</p>
            </div>
            <div className="col-12 col-md-12 text-center">
              <button
                className="btn btn-block bg-blueSky"
                data-toggle="modal"
                data-target="#modalCheckout"
              >
                CheckOut
              </button>
            </div>
            <div className="col-12 col-md-12 text-center mt-2">
              <button className="btn btn-block bg-pink">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCart;
