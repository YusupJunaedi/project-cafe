import React from "react";
// import css
import "../Assets/css/listMenu.css";
// import img
import { useSelector, useDispatch } from "react-redux";
import { addToCartCreator, deleteCartCreator } from "../redux/actions/action";

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

  if (menus) {
    return (
      <div className="list-menu">
        {menus.map((item) => {
          return (
            <div className="card-menu" key={item.id_product}>
              <div className="card-img">
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
                  }}
                />
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
