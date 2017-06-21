import React, { Component } from 'react';
import { Col, Button, Collapse, Image } from 'react-bootstrap';
import FaPlay from 'react-icons/lib/fa/play';
import { Link } from 'react-router-dom';

import backgroundImage from './media/fondosearch.0ae018b2.png';
import imgDer from './media/botonIzquierdaMain.a4afd408.png';
import imgIzq from './media/botonDerechaMain.32fce24d.png';
import imgInfo from './media/+info.png';
import imgBigLogo from './media/logoPrincipal.8420ae09.png';
import maletin from './media/maletin.png';
import handshake from './media/handshake.png';
import ticket from './media/ticket.png';
import video from './media/video.png';


export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openDer: false,
      activeTrans: false,
      hover: false,
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ activeTrans: true }), 1000);
  }

  render() {
    const { height, width } = this.props;
    const { activeTrans, hover } = this.state;
    console.log(activeTrans);
    return (
      <div style={{ background: `url(${backgroundImage}) center center no-repeat`, backgroundSize: 'cover', alignItems: 'center', display: 'flex', minHeight: height, paddingBottom: width < 773 && 50 }}>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <Col md={3} style={{ paddingTop: width > 773 ? '5%' : 100 }} >
            {activeTrans && <center className={'animated slideInRight'}>
              <Link to="/plataforma">
                <img src={imgDer} style={{ height: 130 }} alt="der" />
              </Link>
              <h4 style={{ marginTop: 10, minHeight: 30, color: 'rgb(250, 250, 251)' }}>Liceos de Educación Técnica Profesional (ETP)</h4>
              <Image src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" onClick={() => this.setState({ open: !this.state.open })} />
              <Collapse in={this.state.open}>
                <div style={{ marginTop: 5, color: 'rgb(234, 232, 230)', fontStyle: 'italic', lineHeight: 1, fontWeight: 100 }}>
                  En esta sección encontrarás un mapa con Liceos de Educación Técnica Profesional asociados a la CPC a lo largo del país y sus principales características.
                </div>
              </Collapse>
              <Button onClick={this.props.modalClick5} bsStyle="link" style={{ marginTop: 10 }} >
                <FaPlay />Ver el VideoTutorial
              </Button>
            </center>}
          </Col>
          <Col md={activeTrans ? 6 : 12} className="animated slideInDown">
            <center>
              <img src={imgBigLogo} style={{ height: height * 0.5, marginLeft: '10%' }} alt="der" />
            </center>
          </Col>
          <Col md={3} style={{ paddingTop: '5%', padding: '0 !important' }}>
            <div>
              {activeTrans && <center className={'animated slideInLeft'}>
                <img src={imgIzq} style={{ height: 130 }} alt="der" onMouseEnter={() => this.setState({ hover: true })} />
                {hover &&
                  <div className={'animated fadeInLeftSmall'} style={{ bottom: '37%', paddingLeft: 20, zIndex: 50, left: '55%', position: 'absolute', textAlign: 'left', display: 'inline-block' }}>
                    <div role="link" tabIndex={0} onClick={this.props.modalClick1} style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic' }}>
                      <Image src={maletin} />
                      <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Formando Chilenos</p>
                    </div>
                    <div role="link" tabIndex={0} onClick={this.props.modalClick2} style={{ position: 'relative', left: 30, top: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic' }}>
                      <Image src={handshake} />
                      <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Fortaleciendo la formación técnica</p>
                    </div>
                    <div role="link" tabIndex={0} onClick={this.props.modalClick3} style={{ position: 'relative', left: 30, top: 3, cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic' }}>
                      <Image src={ticket} />
                      <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Capacitar con calidad</p>
                    </div>
                    <div role="link" tabIndex={0} onClick={this.props.modalClick4} style={{ position: 'relative', left: 0, top: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic' }}>
                      <Image src={video} />
                      <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Experencias Sectoriales</p>
                    </div>
                  </div>
                }
                <h4 style={{ marginTop: 20, minHeight: 30, color: 'rgb(250, 250, 251)' }}>Iniciativas del Sector Privado</h4>
                <Image src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" onClick={() => this.setState({ openDer: !this.state.openDer })} />
                <Collapse in={this.state.openDer}>
                  <div style={{ marginTop: 5, color: 'rgb(234, 232, 230)', fontStyle: 'italic', lineHeight: 1, fontWeight: 100 }}>
                    En esta sección encontrarás información sobre iniciativas que se desarrollan desde el sector privado para mejorar la formación de capital humano.
                  </div>
                </Collapse>
              </center>}
            </div>
          </Col>
        </Col>
      </div>
    );
  }
}
