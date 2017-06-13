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
    const { validator } = this.state;
    return (
      <Modal show={validator}>
        <Modal.Header closeButton={() => this.setState({ validator: !validator })}>
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
