import React, { Component } from 'react';
import { Modal, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import informe from './media/hoja.png';
import empresas from './media/empresas.14e1cbeb.png';
import seminario from './media/seminario.5da35961.png';
import noticias from './media/noticias.2a39182d.png';
import empresasFormacion from './media/3.2 Empresas participantes.208eb3e7.jpg';
import descripcion from './media/Descripción Evento.a27089b7.pdf';
import sintesis from './media/Sintesis seminario.c9ce3b30.jpg';
import boletin1 from './media/Boletin 1.08a2e6af.pdf';
import boletin2 from './media/Boletin 2.a53f460b.pdf';

export default class ModalCapacitar extends Component {

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
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title><h4>CAPACITAR CON CALIDAD</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
          <p style={{ fontSize: 14, fontFamily: 'Helvetica Neue', textAlign: 'justify', color: 'rgb(71, 71, 97)' }}>
            En esta sección encontrarás el modelo CT-MAC que implementa un
            sistema de evaluación y un proceso de mejoramiento de calidad del
            servicio de capacitación de las empresas formadoras, que culmina
            con la adquisición de un sello de calidad CPC como certificación
            para el sector.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={informe} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>INFORME EJECUTIVO</p>
            </Col>
            <Col xs={6} md={3}>
              <Image src={empresas} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>EMPRESAS PARTICIPANTES</p>
              <p><a role="presentation" onClick={() => window.open(empresasFormacion)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Empresas</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={seminario} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>SEMINARIO</p>
              <p><a role="presentation" onClick={() => window.open(descripcion)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Descripción Evento</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p><a role="presentation" onClick={() => window.open(sintesis)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Síntesis del Seminario</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <Link to="/images" target="_blank">
                <p onClick={this.props.modalClick}><a role="presentation" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Fotos</a></p>
              </Link>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={noticias} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>BOLETINES</p>
              <p><a role="presentation" onClick={() => window.open(boletin1)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Boletín 1</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p><a role="presentation" onClick={() => window.open(boletin2)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Boletín 2</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ borderTop: '5px solid #83bf27', marginBottom: 60 }} />
      </Modal>
    );
  }
}
