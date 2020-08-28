import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "../Assets/css/modalAdd.css";
import Axios from "axios";
import { connect } from "react-redux";
import { getAllMenuCreator } from "../redux/actions/action";

class ModalAdd extends React.Component {
  state = {
    name: null,
    image: null,
    price: null,
    categoryProduct: null,
  };

  addMenu = () => {
    let formData = new FormData();
    formData.append("name_product", this.state.name);
    formData.append("price_product", this.state.price);
    formData.append("category_id", this.state.categoryProduct);
    formData.append("image", this.state.image);

    const configHeader = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const URL = `${process.env.REACT_APP_LINK_API}addproduct`;
    Axios.post(URL, formData, configHeader).then((res) => {
      console.log(res);
      this.props.getAllMenu();
    });
  };

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Body>
            <Row className="font-weight-bold">
              <Col xs={12} md={12}>
                <p>Add Item</p>
              </Col>
              <Col xs={12} md={12}>
                <Form>
                  <Form.Group as={Row} controlId="formPlaintextName">
                    <Form.Label column sm="2" xs="2">
                      Name
                    </Form.Label>
                    <Col sm="10" xs="10">
                      <Form.Control
                        type="text"
                        onChange={(event) => {
                          this.setState({
                            name: event.target.value,
                          });
                        }}
                        autocomplete="off"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextImage">
                    <Form.Label column sm="2" xs="2">
                      Image
                    </Form.Label>
                    <Col sm="10" xs="10">
                      <Form.File
                        id="image"
                        onChange={(event) => {
                          this.setState({ image: event.target.files[0] });
                        }}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextPrice">
                    <Form.Label column sm="2" xs="2">
                      Price
                    </Form.Label>
                    <Col sm="6" xs="6">
                      <Form.Control
                        type="text"
                        onChange={(event) => {
                          this.setState({
                            price: event.target.value,
                          });
                        }}
                        autocomplete="off"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextCategory">
                    <Form.Label column sm="2" xs="2">
                      Category
                    </Form.Label>
                    <Col sm="4" xs="4">
                      <Form.Control
                        as="select"
                        size="lg"
                        className="select"
                        onChange={(event) => {
                          this.setState({
                            categoryProduct: event.target.value,
                          });
                        }}
                      >
                        <option></option>
                        {this.props.categorys.map((item) => {
                          return (
                            <option
                              value={item.id_category}
                              key={item.id_category}
                            >
                              {item.name_category}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="pink" onClick={this.props.closeModal}>
              Cancel
            </Button>
            <Button
              variant="blueSky"
              onClick={() => {
                this.addMenu();
                this.props.closeModal();
              }}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.category.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMenu: () => dispatch(getAllMenuCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);
