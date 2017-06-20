import React, { Component } from 'react';
import { Modal, Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import Slider from 'react-slick';

import imgTitulacion from '../media/iconTitulacion.png';
import imgSeparator from '../media/separatorModal.png';
import imgSimce from '../media/botonsimce.c7dc04ec.png';
import imgVinculo from '../media/vinculos.6f639643.png';
import imgConsejo from '../media/consejo.52ae89f3.png';
import imgConsejoHover from '../media/consejoHover.0cffe2e7.png';
import imgVinculoHover from '../media/vinculosHover.10d83ecf.png';
import imgSofofa from '../media/oticSofofa.e66f03d7.jpg';
import imgSna from '../media/sna-logo.jpg';
import imgCCHC from '../media/cchc-modal.png';
import imgComeduc from '../media/comeduc-logo.jpg';
import imgAsimet from '../media/asimet-logo.png';
import imgCoreduc from '../media/coreduc-logo.png';

export default class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverVinculo: false,
      hoverConsejo: false,
      logo: [imgSofofa, imgCoreduc, imgSna, imgAsimet, imgComeduc],
    };
  }

  render() {
    const { data } = this.props;
    const { hoverConsejo, hoverVinculo, logo } = this.state;
    console.log(data);
    const settings = {
      dots: false,
      infinite: true,
      fade: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    };
    const popoverHoverFocus = (
      <Popover id="popover-trigger-click-root-close" title="RESULTADOS 2015">
        <p>Matemáticas: {data.simceMatematicas}</p>
        <p>Lenguaje: {data.simceLenguaje}</p>
        <p>Historia: {data.simceHistoria}</p>
      </Popover>
    );
    return (
      <Modal show onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title style={{ alignItems: 'baseline', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingBottom: 0, textAlign: 'center' }}>
            <h4>{data.nombre.toUpperCase()}</h4>
            <p style={{ fontStyle: 'italic', fontSize: 14, padding: '5px 10px 5px 5px', marginBottom: 0 }}>{data.direccion}, {data.comuna}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider {...settings}>
            <div>
              <center style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={data.imagenColegio} alt="" height={150} style={{ padding: 15 }} />
                <img src={data.ImagenLogo} alt="" height={150} style={{ padding: 15 }} />
              </center>
              <div style={{ marginTop: 20 }}>
                <Col md={7} xs={12} style={{ borderColor: 'rgb(208, 208, 213)', borderLeftWidth: 0.5, borderLeftStyle: 'solid', borderrightwidth: 0.5, borderRightStyle: 'solid' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: 0 }}>NÚMERO DE MATRICULADOS 2016</p>
                  <p style={{ lineHeight: 1 }}>{data.matriculados}</p>
                  <p style={{ fontWeight: 'bold', marginBottom: 0 }}>SECTORES ECONÓMICOS</p>
                  <p style={{ lineHeight: 1 }}>{data.sectoresEconomicos}</p>
                  <p style={{ fontWeight: 'bold', marginBottom: 0 }}>ESPECIALIDADES</p>
                  <p style={{ lineHeight: 1 }}>{data.especialidades}</p>
                  <p style={{ fontWeight: 'bold', marginBottom: 0 }}>DEPENDENCIA</p>
                  <p style={{ lineHeight: 1 }}>{data.dependencia}</p>
                </Col>
                <Col md={5} xs={7} style={{ borderColor: 'rgb(208, 208, 213)', borderLeftWidth: 0.5, borderLeftStyle: 'solid', borderRightWidth: 0.5, borderRightStyle: 'solid' }} >
                  <img src={logo[data.IDGremio]} alt="" style={{ height: 35, marginLeft: 15 }} />
                  <div style={{ backgroundColor: 'rgb(237, 237, 241)', margin: '15px 10px 10px', padding: 5 }}>
                    <a href="http://www.liceodmp.cl/v.7/index.php/contacto" target="_blank">
                      <p style={{ lineHeight: 1, color: 'rgb(44, 62, 80)', cursor: 'pointer', fontWeight: 'bold' }}>Contacto</p>
                    </a>
                    <a href="http://www.liceodmp.cl/v.7/" target="_blank">
                      <p style={{ lineHeight: 1, color: 'rgb(44, 62, 80)', cursor: 'pointer', fontWeight: 'bold' }}>Página Web</p>
                    </a>
                  </div>
                </Col>
              </div>
            </div>
            <div>

            </div>
          </Slider>
        </Modal.Body>
        <Image src={imgSeparator} responsive />
        <Modal.Footer>
          <Col md={3} style={{ paddingLeft: 20, paddingRight: 0 }}>
            <p style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 0, textAlign: 'center', color: 'rgb(98, 97, 131)', justifyContent: 'center' }}>
              Tasa de Titulación 2016
            </p>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
              <img alt="dada" src={imgTitulacion} style={{ height: 45 }} />
              <p style={{ fontSize: 36, color: 'rgb(98, 97, 131)', marginLeft: 5 }} >
                {data.tasaTitulacion}
              </p>
            </div>
          </Col>
          <Col md={9} >
            <Col md={4} >
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
                <img src={imgSimce} height={85} alt="dada" />
              </OverlayTrigger>
            </Col>
            <Col md={4} >
              <img src={!hoverVinculo ? imgVinculo : imgVinculoHover} onMouseEnter={() => this.setState({ hoverVinculo: true })} onMouseLeave={() => this.setState({ hoverVinculo: false })} height={85} alt="dada" style={{ cursor: 'pointer' }} />
            </Col>
            <Col md={4} >
              <img src={!hoverConsejo ? imgConsejo : imgConsejoHover} onMouseEnter={() => this.setState({ hoverConsejo: true })} onMouseLeave={() => this.setState({ hoverConsejo: false })} height={85} alt="dada" style={{ cursor: 'pointer' }} />
            </Col>
          </Col>
        </Modal.Footer>
      </Modal>
    );
  }
}
