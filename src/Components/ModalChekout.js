import React, { Fragment } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "../Assets/css/modalCheckout.css";
import { deleteALLCartCreator } from "../redux/actions/action";

const ModalCheckout = (props) => {
  const carts = useSelector((state) => state.cart.data);
  const invoice = useSelector((state) => state.cart.invoice);
  const dispatch = useDispatch();

  const totalPrice = () => {
    return carts.reduce((total, item) => {
      return total + item.price_product * item.qty;
    }, 0);
  };

  const addHistory = () => {
    const totalAmount = totalPrice();

    const totalOrder = carts.map((item) => {
      return {
        invoice: invoice,
        product_id: item.id_product,
        qty: item.qty,
        total_price: item.price_product * item.qty,
      };
    });

    const URL = `${process.env.REACT_APP_LINK_API}history/addhistory`;
    Axios.post(URL, {
      productOrder: totalOrder,
      invoice: invoice,
      cashir: 1,
      amount: totalAmount,
    })
      .then(() => {
        dispatch(deleteALLCartCreator());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal show={props.showModal} onHide={props.closeModal}>
        <Modal.Body>
          <Row>
            <Col xs={6} md={6}>
              <p className="text-bold">Checkout</p>
            </Col>
            <Col xs={6} md={6}>
              <p className="text-bold text-right">Receipt no: #{invoice}</p>
            </Col>
            <Col xs={12} md={12}>
              <p className="text-bold mb-5">Cashir 1</p>
            </Col>
            {carts.map((item) => {
              return (
                <Fragment key={item.id_product}>
                  <Col xs={6} md={6}>
                    <p className="text-bold" key={item.id_product}>
                      {item.name_product} {item.qty}x
                    </p>
                  </Col>
                  <Col xs={6} md={6}>
                    <p className="text-bold text-right">
                      Rp. {item.price_product * item.qty}
                    </p>
                  </Col>
                </Fragment>
              );
            })}

            <Col xs={6} md={6}>
              <p className="text-bold">Ppn 10%</p>
            </Col>
            <Col xs={6} md={6}>
              <p className="text-bold text-right">Rp. {0.1 * totalPrice()}</p>
            </Col>
            <Col xs={12} md={12}>
              <p className="text-bold text-right">
                Total: Rp. {totalPrice() + 0.1 * totalPrice()}
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
                  props.closeModal();
                  addHistory();
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
                onClick={props.closeModal}
              >
                Send Email
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCheckout;
