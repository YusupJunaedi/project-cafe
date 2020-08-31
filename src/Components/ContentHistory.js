import React from "react";
import "../Assets/css/contentHistory.css";

import Chart from "../Components/Chart";

import { useSelector } from "react-redux";

const ContentHistory = () => {
  const transaksi = useSelector((state) => state.transaksi.data);
  return (
    <>
      <div className="content-history">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-3 col-md-4">
              <div className="card card-income">
                <div className="card-body">
                  <div className="title-info font-weight-bold">
                    <p>Today's Income</p>
                    <h3>Rp. 1.000.000</h3>
                    <p>+2% Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3 col-md-4">
              <div className="card card-orders">
                <div className="card-body">
                  <div className="title-info font-weight-bold">
                    <p>Orders</p>
                    <h3>3.270</h3>
                    <p>+5% Last Week</p>
                  </div>
                  <div className="img-elipse"></div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3 col-md-4">
              <div className="card card-years-income">
                <div className="card-body">
                  <div className="title-info font-weight-bold">
                    <p>This Year's Income</p>
                    <h3>Rp. 1.000.000.000.000</h3>
                    <p>+10% Last Yesterday</p>
                  </div>
                  <div className="img-elipse"></div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 col-md-12">
              <Chart />
            </div>
            <div className="col-6 col-md-6 mt-5 mb-3">
              <h3>Recent Order</h3>
            </div>
            <div className="col-6 col-md-6 mt-5 mb-3 text-right">
              <select className="select-days" id="exampleFormControlSelect2">
                <option>Today</option>
                <option>Last Day</option>
              </select>
            </div>
            <div className="col-12 col-md-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">INVOICES</th>
                      <th scope="col">CASHIER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">ORDERS</th>
                      <th scope="col">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaksi.map((item) => {
                      return (
                        <tr>
                          <th scope="row">#{item.invoice}</th>
                          <td>{item.name_cashier}</td>
                          <td>{item.create_at}</td>
                          <td>{item.orders}</td>
                          <td>{item.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHistory;
