import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";

import "../Assets/css/modalCheckout.css";

class ModalCheckout extends React.Component {
  state = {
    invoice: new Date().getTime(),
  };

  totalPrice = () => {
    return this.props.arrCarts.reduce((total, item) => {
      return total + item.price_product * item.qty;
    }, 0);
  };

  addHistory = () => {
    const invoice = this.state.invoice;
    const totalAmount = this.totalPrice();

    const totalOrder = this.props.arrCarts.map((item) => {
      return {
        invoice: invoice,
        product_id: item.id_product,
        qty: item.qty,
        total_price: item.price_product * item.qty,
      };
    });

    const URL = `${process.env.REACT_APP_LINK_API}addhistorys`;
    Axios.post(URL, {
      productOrder: totalOrder,
      invoice: invoice,
      cashir: 1,
      amount: totalAmount,
    })
      .then(() => {
        this.props.clearCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Body>
            <Row>
              <Col xs={6} md={6}>
                <p className="text-bold">Checkout</p>
              </Col>
              <Col xs={6} md={6}>
                <p className="text-bold text-right">
                  Receipt no: #{this.state.invoice}
                </p>
              </Col>
              <Col xs={12} md={12}>
                <p className="text-bold mb-5">Cashir 1</p>
              </Col>
              {this.props.arrCarts.map((item) => {
                return (
                  <>
                    <Col xs={6} md={6}>
                      <p className="text-bold">
                        {item.name_product} {item.qty}x
                      </p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p className="text-bold text-right">
                        Rp. {item.price_product * item.qty}
                      </p>
                    </Col>
                  </>
                );
              })}

              <Col xs={6} md={6}>
                <p className="text-bold">Ppn 10%</p>
              </Col>
              <Col xs={6} md={6}>
                <p className="text-bold text-right">
                  Rp. {0.1 * this.totalPrice()}
                </p>
              </Col>
              <Col xs={12} md={12}>
                <p className="text-bold text-right">
                  Total: Rp. {this.totalPrice() + 0.1 * this.totalPrice()}
                </p>
              </Col>
              <Col xs={12} md={12}>
                <p className="text-bold">Payment: Cash</p>
              </Col>
              <Col xs={12} md={12}>
                <Button
                  variant="pink"
                  size="lg"
                  block
                  onClick={() => {
                    this.props.closeModal();
                    this.addHistory();
                  }}
                >
                  Print
                </Button>
              </Col>
              <Col xs={12} md={12}>
                <p className="text-bold text-center mt-3">Or</p>
              </Col>
              <Col xs={12} md={12}>
                <Button
                  variant="blueSky"
                  size="lg"
                  block
                  onClick={this.props.closeModal}
                >
                  Send Email
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalCheckout;
