import React, { Component } from 'react';
import { Modal, Col } from 'react-bootstrap';

export default class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Modal show onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title style={{ alignItems: 'baseline', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingBottom: 0, textAlign: 'center' }}>
            <h4>{data.nombre.toUpperCase()}</h4>
            <p style={{ fontStyle: 'italic', fontSize: 14, padding: '5px 10px 5px 5px', marginBottom: 0 }}>{data.direccion}, {data.comuna}</p>
          </Modal.Title>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Col md={3} style={{ paddingLeft: 20, paddingRight: 0 }}>
              <p style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 0, textAlign: 'center', color: 'rgb(98, 97, 131)', justifyContent: 'center' }}>
                Tasa de Titulación 2016
              </p>
            </Col>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
              
            </div>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    );
  }
}
