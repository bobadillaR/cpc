import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
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
    };
  }


  render() {
    const { height } = this.props;
    return (
      <div style={{ background: `url(${backgroundImage}) center center no-repeat`, backgroundSize: 'cover', alignItems: 'center', display: 'flex', minHeight: height }}>
        <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
          <Col md={3} style={{ paddingTop: '5%' }}>
            <center>
              <img src={imgDer} style={{ height: 130 }} alt="der" />
              <h4 style={{ margintop: 10, minheight: 30, color: 'rgb(250, 250, 251)' }}>Liceos de Educación Técnica Profesional (ETP)</h4>
              <img src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" />
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
          <Col md={3} style={{ paddingTop: '5%' }}>
            <center>
              <img src={imgIzq} style={{ height: 130 }} alt="der" />
              <h4 style={{ margintop: 10, minheight: 30, color: 'rgb(250, 250, 251)' }}>Liceos de Educación Técnica Profesional (ETP)</h4>
              <img src={imgInfo} style={{ height: 40, cursor: 'pointer' }} alt="der" />
            </center>
          </Col>
        </Col>
      </div>
    );
  }
}
