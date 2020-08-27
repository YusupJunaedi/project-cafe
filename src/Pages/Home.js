import React from "react";
import "../Assets/css/homePage.css";
import HeaderHome from "../Components/HeaderHome";
import Axios from "axios";
import { connect } from "react-redux";

import Sidebar from "../Components/Sidebar";
import ListMenu from "../Components/ListMenu";
import ListCart from "../Components/ListCart";

class Home extends React.Component {
  state = {
    menus: [],
    carts: [],
    categorys: [],
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
    const URI = process.env.REACT_APP_LINK_API;
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

  searchMenu = (name, by) => {
    const URI = `${process.env.REACT_APP_LINK_API}search?name=${name}&by=${by}`;
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

  getAllCategory = () => {
    const URI = `${process.env.REACT_APP_LINK_API}categorys`;
    Axios.get(URI)
      .then((res) => {
        this.setState({
          categorys: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getAllmenu();
    this.getAllCategory();
    this.props.changeMenus();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <HeaderHome
          searchMenu={(name, by) => this.searchMenu(name, by)}
          arrCarts={this.state.carts}
        />
        <div className="content">
          <Sidebar
            updateMenu={this.getAllmenu}
            allCategory={this.state.categorys}
          />
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

const actionGetAllMenu = () => (dispatch) => {
  const URI = process.env.REACT_APP_LINK_API;
  Axios.get(URI)
    .then((res) => {
      return dispatch({ type: "CHANGE_MENUS", value: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

const mapStateToProps = (state) => {
  return { state };
};

const reduxDispatch = (dispatch) => ({
  changeMenus: () => dispatch(actionGetAllMenu()),
});

export default connect(mapStateToProps, reduxDispatch)(Home);
