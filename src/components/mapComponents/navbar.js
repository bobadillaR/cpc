import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Select from 'react-select';
import './select.css';

import imgSector from '../media/sectoreconomico.65cf16a0.png';
import imgTasa from '../media/tasaempleabilidad.75817b54.png';
import imgSearch from '../media/direccion.1eb1146f.png';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sector: [
        { label: 'Administración y comercio', value: 'adco' },
        { label: 'Agropecuario', value: 'agpo' },
        { label: 'Alimentación', value: 'alim' },
        { label: 'Confección', value: 'conf' },
        { label: 'Construcción', value: 'cons' },
        { label: 'Electricidad', value: 'elec' },
        { label: 'Gráfica', value: 'graf' },
        { label: 'Hotelera y Turismo', value: 'hotu' },
        { label: 'Maderero', value: 'made' },
        { label: 'Metalmecánico', value: 'meta' },
        { label: 'Minero', value: 'mine' },
        { label: 'Programas y Proyectos Sociales', value: 'pyps' },
        { label: 'Químico', value: 'quim' },
      ],
      tasa: [
        { label: '< 60%', value: '<60%' },
        { label: '60% - 80%', value: '6080' },
        { label: '> 80%', value: '>80%' },
        { label: 'Sin Información', value: 'nn' },
      ],
    };
  }


  render() {
    const { sector, tasa } = this.state;
    return (
      <div>
        <Col xs={12} md={10} mdOffset={1} style={{ marginTop: 80, backgroundColor: '#454561', paddingTop: 4, paddingBottom: 4 }}>
          <Col md={4} mdOffset={1}>
            <Col xs={10}>
              <Select placeholder="Sector Económico" options={sector} multi />
            </Col>
            <Col xs={2}>
              <img src={imgSector} style={{ height: 32, margintop: 5 }} alt="lala" />
            </Col>
          </Col>
          <Col md={3}>
            <Col xs={10}>
              <Select placeholder="Tasa de Titulación" options={tasa} />
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
