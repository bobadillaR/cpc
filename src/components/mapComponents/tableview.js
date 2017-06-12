import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class TableView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Col xs={3} xsPull={1} style={{ backgroundColor: 'rgb(255, 255, 255)', position: 'fixed', top: 146, zIndex: 5, borderRadius: 5, padding: 0, alignItems: 'center', boxShadow: 'rgb(136, 136, 136) 3px 3px 3px' }}>
        <h4 style={{ paddingLeft: 15 }}>CENTROS EDUCACIONALES</h4>
      </Col>
    );
  }
}
