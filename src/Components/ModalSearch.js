import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { searchMenuCreator, clearMenuCreator } from "../redux/actions/action";

class ModalSearch extends React.Component {
  state = {
    search: null,
    by: null,
  };

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Search Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12} md={12}>
                <Form>
                  <Form.Group as={Row} controlId="formPlaintextSearch">
                    <Form.Label column sm="2" xs="2">
                      Search
                    </Form.Label>
                    <Col sm="10" xs="10">
                      <Form.Control
                        type="text"
                        autocomplete="off"
                        onChange={(event) => {
                          this.setState({
                            search: event.target.value,
                          });
                        }}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextBy">
                    <Form.Label column sm="2" xs="2">
                      By
                    </Form.Label>
                    <Col sm="6" xs="6">
                      <Form.Control
                        as="select"
                        size="lg"
                        className="select"
                        onChange={(event) => {
                          this.setState({
                            by: event.target.value,
                          });
                        }}
                      >
                        <option></option>
                        <option value="name_product">Name Product</option>
                        <option value="category_id">Category</option>
                        <option value="price_product">Price Product</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="pink" onClick={this.props.closeModal}>
              Close
            </Button>
            <Button
              variant="blueSky"
              onClick={() => {
                this.props.closeModal();
                this.props.clearMenu();
                this.props.searchMenu(this.state.search, this.state.by);
              }}
            >
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMenu: (nameProduct, by) =>
      dispatch(searchMenuCreator(nameProduct, by)),
    clearMenu: () => dispatch(clearMenuCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSearch);
