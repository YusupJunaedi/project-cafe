import React from "react";

import "../Assets/css/listCart.css";

import imgCofee from "../Assets/img/cofee.png";

const ListCart = (props) => {
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
                    <button className="button">-</button>
                    <span className="jml">{item.qty}</span>
                    <button className="button">+</button>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-right">
                  <p className="total-item">Rp. {item.price_product}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {props.arrCarts.map((item) => {
        return (
          <div className="list-cart">
            <div className="img-cart">
              <img src={item.img_product} alt="img-menu" />
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default ListCart;
