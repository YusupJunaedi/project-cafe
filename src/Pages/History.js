import React from "react";
import Axios from "axios";
import HeaderHistory from "../Components/HeaderHistory";
import Sidebar from "../Components/Sidebar";
import ContentHistory from "../Components/ContentHistory";

import "../Assets/css/historyPage.css";

class History extends React.Component {
  state = {
    categorys: [],
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

  render() {
    return (
      <>
        <HeaderHistory />
        <div className="Body-history">
          <Sidebar
            updateMenu={this.getAllmenu}
            allCategory={this.state.categorys}
          />
          <ContentHistory />
        </div>
      </>
    );
  }
}

export default History;
