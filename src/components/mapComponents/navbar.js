import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import imgSector from '../media/sectoreconomico.65cf16a0.png';
import imgTasa from '../media/tasaempleabilidad.75817b54.png';
import imgSearch from '../media/direccion.1eb1146f.png';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Col xs={12} md={10} mdOffset={1} style={{ marginTop: 80, backgroundColor: '#454561' }}>
          <Col md={4} mdOffset={1}>
            <Col xs={10}>
              <Select placeholder="Sector Económico" />
            </Col>
            <Col xs={2}>
              <img src={imgSector} style={{ height: 32, margintop: 5 }} alt="lala" />
            </Col>
          </Col>
          <Col md={3}>
            <Col xs={10}>
              <Select placeholder="Tasa de Titulación" />
            </Col>
            <Col xs={2}>
              <img src={imgTasa} style={{ height: 32, margintop: 5 }} alt="lala" />
            </Col>
          </Col>
          <Col md={4}>
            <Col xs={10}>
              <Select placeholder="Lugar o Nombre de Liceo" />
            </Col>
            <Col xs={2}>
              <img src={imgSearch} style={{ height: 32, margintop: 5 }} alt="lala" />
            </Col>
          </Col>
        </Col>
      </div>
    );
  }
}
