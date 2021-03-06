import React from "react";
// import css
import "../Assets/css/listMenu.css";
// import img

const ListMenu = (props) => {
  if (props.arrMenus) {
    return (
      <div className="list-menu">
        {props.arrMenus.map((item) => {
          return (
            <div className="card-menu" key={item.id_product}>
              <div className="card-img">
                <img
                  src={item.img_product}
                  alt="img-cofee"
                  onClick={() => {
                    props.addToCart(
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
