import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    };
  }


  render() {
    const { show } = this.props;
    return (
      <Modal show={show} onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          One fine body...
        </Modal.Body>

        <Modal.Footer>
          <p>dkapodmasp</p>
        </Modal.Footer>
      </Modal>
    );
  }
}
