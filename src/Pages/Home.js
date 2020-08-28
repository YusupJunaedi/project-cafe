import React from "react";
import "../Assets/css/homePage.css";
import HeaderHome from "../Components/HeaderHome";
import { connect } from "react-redux";

import Sidebar from "../Components/Sidebar";
import ListMenu from "../Components/ListMenu";
import ListCart from "../Components/ListCart";

import {
  getAllMenuCreator,
  getAllCategoryCreator,
} from "../redux/actions/action";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getAllCategory();
    this.props.getAllMenu();
  };

  render() {
    return (
      <>
        <HeaderHome />
        <div className="content">
          <Sidebar />
          <ListMenu />
          <ListCart />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMenu: () => dispatch(getAllMenuCreator()),
    getAllCategory: () => dispatch(getAllCategoryCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
