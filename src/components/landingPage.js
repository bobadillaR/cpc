import React, { Component } from 'react';
import { Col, Button, Collapse, Image } from 'react-bootstrap';
import FaPlay from 'react-icons/lib/fa/play';

import backgroundImage from './media/fondosearch.0ae018b2.png';
import imgDer from './media/botonIzquierdaMain.a4afd408.png';
import imgIzq from './media/botonDerechaMain.32fce24d.png';
import imgInfo from './media/+info.png';
import imgBigLogo from './media/logoPrincipal.8420ae09.png';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openDer: false,
    };
  }


  render() {
    const { height, width } = this.props;
    return (
      <div style={{ background: `url(${backgroundImage}) center center no-repeat`, backgroundSize: 'cover', alignItems: 'center', display: 'flex', minHeight: height, paddingBottom: width < 773 && 50 }}>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <Col md={3} style={{ paddingTop: width > 773 ? '5%' : 100 }}>
            <center>
              <img src={imgDer} style={{ height: 130 }} alt="der" />
              <h4 style={{ marginTop: 10, minHeight: 30, color: 'rgb(250, 250, 251)' }}>Liceos de Educación Técnica Profesional (ETP)</h4>
              <Image src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" onClick={() => this.setState({ open: !this.state.open })} />
              <Collapse in={this.state.open}>
                <div style={{ marginTop: 5, color: 'rgb(234, 232, 230)', fontStyle: 'italic', lineHeight: 1, fontWeight: 100 }}>
                  En esta sección encontrarás un mapa con Liceos de Educación Técnica Profesional asociados a la CPC a lo largo del país y sus principales características.
                </div>
              </Collapse>
              <Button bsStyle="link" style={{ marginTop: 10 }} >
                <FaPlay />Ver el VideoTutorial
              </Button>
            </center>
          </Col>
          <Col md={6}>
            <center>
              <img src={imgBigLogo} style={{ height: height * 0.5, marginLeft: '10%' }} alt="der" />
            </center>
          </Col>
          <Col md={3} style={{ paddingTop: '5%', padding: '0 !important' }}>
            <center>
              <img src={imgIzq} style={{ height: 130 }} alt="der" />
              <h4 style={{ marginTop: 10, minHeight: 30, color: 'rgb(250, 250, 251)' }}>Iniciativas del Sector Privado</h4>
              <Image src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" onClick={() => this.setState({ openDer: !this.state.openDer })} />
              <Collapse in={this.state.openDer}>
                <div style={{ marginTop: 5, color: 'rgb(234, 232, 230)', fontStyle: 'italic', lineHeight: 1, fontWeight: 100 }}>
                  En esta sección encontrarás información sobre iniciativas que se desarrollan desde el sector privado para mejorar la formación de capital humano.
                </div>
              </Collapse>
            </center>
          </Col>
        </Col>
      </div>
    );
  }
}
