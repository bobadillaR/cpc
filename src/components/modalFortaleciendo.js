import React, { Component } from 'react';
import { Modal, Col, Row, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import plan from './media/plan.82bc9831.png';
import reporte from './media/reporte.0b0787ce.png';
import talleres from './media/talleres.a1977bd3.png';
import noticias from './media/noticias.2a39182d.png';
import titular from './media/Comunicado Convenio CPC-UC.25da4454.pdf';

export default class ModalFortaleciendo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    };
  }

  render() {
    const { show } = this.props;
    const tooltip = (
      <Tooltip id="tooltip"><strong>En proceso...</strong></Tooltip>
    );
    return (
      <Modal show={show} onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title><h4>FORTALECIENDO LA FORMACIÓN TÉCNICA </h4></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
          <p style={{ fontSize: 14, fontFamily: 'Helvetica Neue', textAlign: 'justify', color: 'rgb(71, 71, 97)' }}>
            En esta sección encontrarás el detalle del proyecto que la CPC con
            el Centro de Políticas Públicas de la UC, Inacap y Duoc, está
            desarrollando para identificar las dificultades en el funcionamiento
            de la educación técnica y desarrollar un mayor vínculo entre los
            establecimientos de enseñanza media con los de educación superior
            y las empresas
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={plan} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>PLAN DE ACCIÓN</p>
            </Col>
            <Col xs={6} md={3}>
              <Image src={reporte} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>REPORTE DE ANTECEDENTES</p>
            </Col>
            <Col xs={6} md={3}>
              <Image src={talleres} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>TALLERES DE VALIDACION</p>
              <OverlayTrigger placement="top" overlay={tooltip}><p><a role="link" tabIndex={0} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Talleres Nacionales</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={tooltip}><p><a role="link" tabIndex={0} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Talleres Regionales</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={noticias} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>TALLERES DE VALIDACION</p>
              <p><a role="link" tabIndex={0} onClick={() => window.open(titular)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Titular</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={tooltip}><p><a role="link" tabIndex={0} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>En la prensa</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ borderTop: '5px solid #83bf27', marginBottom: 60 }} />
      </Modal>
    );
  }
}
