import React from "react";
import "../Assets/css/homePage.css";
import HeaderHome from "../Components/HeaderHome";
import Axios from "axios";

import Sidebar from "../Components/Sidebar";
import ListMenu from "../Components/ListMenu";
import ListCart from "../Components/ListCart";

class Home extends React.Component {
  state = {
    menus: [],
    carts: [],
  };

  addToCart = (id, name, price, img) => {
    const index = this.state.carts.findIndex((item) => {
      return item.id_product === id;
    });

    if (index >= 0) {
      this.state.carts.splice(index, 1);
      this.setState({
        carts: this.state.carts,
      });
    } else {
      const newCart = {
        id_product: id,
        name_product: name,
        qty: 1,
        price_product: price,
        img_product: img,
      };

      this.setState({
        carts: this.state.carts.concat(newCart),
      });
    }
  };

  getAllmenu = () => {
    const URI = "http://localhost:8001/";
    Axios.get(URI)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          menus: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getAllmenu();
  };

  render() {
    console.log(this.state.carts);
    return (
      <>
        <HeaderHome />
        <div className="content">
          <Sidebar />
          <ListMenu
            arrMenus={this.state.menus}
            addToCart={(id, name, price, img) =>
              this.addToCart(id, name, price, img)
            }
          />
          <ListCart arrCarts={this.state.carts} />
        </div>
      </>
    );
  }
}

export default Home;