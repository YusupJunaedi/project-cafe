import React from "react";
import "../Assets/css/contentHistory.css";

import Chart from "../Components/Chart";

const ContentHistory = () => {
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
            <div class="col-12 mt-3 col-md-4">
              <div class="card card-orders">
                <div class="card-body">
                  <div class="title-info font-weight-bold">
                    <p>Orders</p>
                    <h3>3.270</h3>
                    <p>+5% Last Week</p>
                  </div>
                  <div class="img-elipse"></div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-3 col-md-4">
              <div class="card card-years-income">
                <div class="card-body">
                  <div class="title-info font-weight-bold">
                    <p>This Year's Income</p>
                    <h3>Rp. 1.000.000.000.000</h3>
                    <p>+10% Last Yesterday</p>
                  </div>
                  <div class="img-elipse"></div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-5 col-md-12">
              <Chart />
            </div>
            <div class="col-6 col-md-6 mt-5 mb-3">
              <h3>Recent Order</h3>
            </div>
            <div class="col-6 col-md-6 mt-5 mb-3 text-right">
              <select class="select-days" id="exampleFormControlSelect2">
                <option>Today</option>
                <option>Last Day</option>
              </select>
            </div>
            <div class="col-12 col-md-12">
              <div class="table-responsive">
                <table class="table">
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
                    <tr>
                      <th scope="row">#10928</th>
                      <td>Cashier 1</td>
                      <td>27 July 2020</td>
                      <td>Cofee Latte </td>
                      <td>Rp. 15.000</td>
                    </tr>
                    <tr>
                      <th scope="row">#10927</th>
                      <td>Cashier 1</td>
                      <td>27 July 2020</td>
                      <td>Choco Rhum, Cappucino </td>
                      <td>Rp. 33.000</td>
                    </tr>
                    <tr>
                      <th scope="row">#10926</th>
                      <td>Cashier </td>
                      <td>27 July 2020</td>
                      <td>Chiken Katsu Dabu-dabu </td>
                      <td>Rp. 60.000</td>
                    </tr>
                    <tr>
                      <th scope="row">#10925</th>
                      <td>Cashier 2</td>
                      <td>27 July 2020</td>
                      <td>Espresso </td>
                      <td>Rp. 10.000</td>
                    </tr>
                    <tr>
                      <th scope="row">#10924</th>
                      <td>Cashier 1</td>
                      <td>27 July 2020</td>
                      <td>Red Velvet Latte </td>
                      <td>Rp. 33.000</td>
                    </tr>
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
