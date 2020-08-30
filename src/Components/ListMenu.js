import React from "react";
// import css
import "../Assets/css/listMenu.css";
// import img
import checklist from "../Assets/img/tick.png";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartCreator,
  deleteCartCreator,
  checkedMenuCreator,
  uncheckedMenuCreator,
} from "../redux/actions/action";

const ListMenu = (props) => {
  const menus = useSelector((state) => state.menu.data);
  const carts = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const addToCart = (id, name, price, img) => {
    const index = carts.findIndex((item) => {
      return item.id_product === id;
    });

    if (index >= 0) {
      dispatch(deleteCartCreator(index));
    } else {
      const newCart = {
        id_product: id,
        name_product: name,
        qty: 1,
        price_product: price,
        img_product: img,
      };
      dispatch(addToCartCreator(newCart));
    }
  };

  const checkedMenu = (id) => {
    const index = menus.findIndex((item) => {
      return item.id_product === id;
    });

    dispatch(checkedMenuCreator(index));
  };

  const uncheckedMenu = (id) => {
    const index = menus.findIndex((item) => {
      return item.id_product === id;
    });

    dispatch(uncheckedMenuCreator(index));
  };

  if (menus) {
    return (
      <div className="list-menu">
        {menus.map((item) => {
          return (
            <div className="card-menu" key={item.id_product}>
              <div className="card-img">
                {/* {item.checked ? (
                  <div className="img-checklist">
                    <img
                      src={checklist}
                      alt="checklist"
                      onClick={() => {
                        addToCart(
                          item.id_product,
                          item.name_product,
                          item.price_product,
                          item.img_product
                        );
                        uncheckedMenu(item.id_product);
                      }}
                    />
                  </div>
                ) : (
                  ""
                )} */}

                <div className="img-menu">
                  <img
                    src={item.img_product}
                    alt="img-cofee"
                    onClick={() => {
                      addToCart(
                        item.id_product,
                        item.name_product,
                        item.price_product,
                        item.img_product
                      );
                      checkedMenu(item.id_product);
                    }}
                  />
                </div>
              </div>
              <p className="title-menu">{item.name_product}</p>
              <p className="title-price">Rp. {item.price_product}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="list-menu">
        <h3 className="mt-5">Menu Not Found!</h3>
      </div>
    );
  }
};

export default ListMenu;
