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

  handlePlus = (id) => {
    const index = this.state.carts.findIndex((item) => {
      return item.id_product === id;
    });

    let arrData = [...this.state.carts];
    arrData[index] = {
      ...arrData[index],
      qty: this.state.carts[index].qty + 1,
    };

    this.setState({
      carts: arrData,
    });
  };

  handleMinus = (id) => {
    const index = this.state.carts.findIndex((item) => {
      return item.id_product === id;
    });

    if (this.state.carts[index].qty > 1) {
      let arrData = [...this.state.carts];
      arrData[index] = {
        ...arrData[index],
        qty: this.state.carts[index].qty - 1,
      };

      this.setState({
        carts: arrData,
      });
    }
  };

  clearCarts = () => {
    this.setState({
      carts: [],
    });
  };

  getAllmenu = () => {
    const URI = "http://localhost:8001/";
    Axios.get(URI)
      .then((res) => {
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
    return (
      <>
        <HeaderHome />
        <div className="content">
          <Sidebar updateMenu={this.getAllmenu} />
          <ListMenu
            arrMenus={this.state.menus}
            addToCart={(id, name, price, img) =>
              this.addToCart(id, name, price, img)
            }
          />
          <ListCart
            arrCarts={this.state.carts}
            handlePlus={(id_product) => {
              this.handlePlus(id_product);
            }}
            handleMinus={(id_product) => {
              this.handleMinus(id_product);
            }}
            clearCart={this.clearCarts}
          />
        </div>
      </>
    );
  }
}

export default Home;
