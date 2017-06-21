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
// import imgCCHC from '../media/cchc-modal.png';
import imgComeduc from '../media/comeduc-logo.jpg';
import imgAsimet from '../media/asimet-logo.png';
import imgCoreduc from '../media/coreduc-logo.png';
import flechaIzquierda from '../media/flechaizq.png';
import flechaDerecha from '../media/felchaderecha.png';
import flechaIzquierdaHover from '../media/flechaizqhover.png';
import flechaDerechaHover from '../media/flechaderhover.png';
import imgSNAEmpresa from '../media/agriculturaeduca.b51dfc54.jpg';
import imgOTICEmpresa1 from '../media/oticeditado.fafe5f29.png';
import imgOTICEmpresa2 from '../media/oticeditado2.7cbd860a.png';
import imgAsimetEmpresa from '../media/asimeteditado.2bfa4ffa.jpg';

import imgRafeal from '../media/rafaelDonoso.jpg';
import imgVictor from '../media/victorBezanilla.png';


export default class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverVinculo: false,
      hoverConsejo: false,
      logo: [imgSofofa, imgCoreduc, imgSna, imgAsimet, imgComeduc],
      imgEmpresa: [imgOTICEmpresa2, imgOTICEmpresa1, imgSNAEmpresa, imgAsimetEmpresa, imgAsimetEmpresa],
      imgSpecific: [imgRafeal, imgVictor],
      hoverDerecha: false,
      hoverIzquierda: false,
    };
  }

  render() {
    const { data } = this.props;
    const { hoverConsejo, hoverVinculo, logo, hoverIzquierda, hoverDerecha, imgEmpresa } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      fade: false,
      speed: 500,
      slidesToShow: 1,
      height: '100%',
      slidesToScroll: 1,
      nextArrow: data.empresas !== '' && <Image src={hoverDerecha ? flechaDerechaHover : flechaDerecha} onMouseEnter={() => this.setState({ hoverDerecha: true })} onMouseLeave={() => this.setState({ hoverDerecha: false })} />,
      prevArrow: data.empresas !== '' && <Image src={hoverIzquierda ? flechaIzquierdaHover : flechaIzquierda} onMouseEnter={() => this.setState({ hoverIzquierda: true })} onMouseLeave={() => this.setState({ hoverIzquierda: false })} />,
    };
    const popoverHoverFocus = (
      <Popover id="popover-trigger-click-root-close" title="RESULTADOS 2015">
        <p>Matemáticas: {data.simceMatematicas}</p>
        <p>Lenguaje: {data.simceLenguaje}</p>
        <p>Historia: {data.simceHistoria}</p>
      </Popover>
    );
    const popoverHoverConsejo = (
      <Popover id="popover-trigger-click-root-close" title="Este Liceo cuenta con Consejo Asesor Empresarial" />
    );
    return (
      <Modal show onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title style={{ alignItems: 'baseline', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingBottom: 0, textAlign: 'center' }}>
            <h4>{data.nombre.toUpperCase()}</h4>
            <p style={{ fontStyle: 'italic', fontSize: 14, padding: '5px 10px 5px 5px', marginBottom: 0 }}>{data.direccion}, {data.comuna}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: 15, marginRight: 15, paddingTop: 5 }}>
          <Slider {...settings} ref={c => (this.slider = c)} >
            <div>
              <Col xs={12}>
                <Col xs={12} md={6}>
                  <center style={{ display: 'flex', justifyContent: 'center', height: 150 }}>
                    <Image responsive src={data.imagenColegio} alt="" />
                  </center>
                </Col>
                <Col xs={12} md={6}>
                  <center style={{ display: 'flex', justifyContent: 'center', height: 150 }}>
                    <Image responsive src={data.ImagenLogo} alt="" />
                  </center>
                </Col>
              </Col>
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
                <Col md={5} xs={12} style={{ borderColor: 'rgb(208, 208, 213)', borderLeftWidth: 0.5, borderLeftStyle: 'solid', borderRightWidth: 0.5, borderRightStyle: 'solid' }} >
                  <img src={logo[data.IDGremio]} alt="" style={{ height: 35, marginLeft: 15 }} />
                  <div style={{ backgroundColor: 'rgb(237, 237, 241)', margin: '15px 10px 10px', padding: 5 }}>
                    {data.web !== '' &&
                      <a rel="noopener noreferrer" href={data.web} target="_blank">
                        <p style={{ lineHeight: 1, color: 'rgb(44, 62, 80)', cursor: 'pointer', fontWeight: 'bold' }}>Contacto</p>
                      </a>
                    }
                    {data.mail !== '' &&
                      <a rel="noopener noreferrer" href={data.mail} target="_blank">
                        <p style={{ lineHeight: 1, color: 'rgb(44, 62, 80)', cursor: 'pointer', fontWeight: 'bold' }}>Página Web</p>
                      </a>
                    }
                  </div>
                </Col>
              </div>
            </div>
            {data.empresas !== '' &&
              <div>
                <p style={{ color: 'rgb(65, 81, 97)', fontStyle: 'italic', fontSize: 12 }}>
                  Las siguientes empresas apoyan a este establecimiento para  su funcionamiento. El apoyo varía según cada liceo en aspectos como prácticas
                  profesionales, programas de formación dual, charlas formativas, maquinarias y materiales, entre otros.
                </p>
                <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                  <div style={{ paddingLeft: 15, marginTop: 20 }}>
                    <h4><strong>VÍNCULO EMPRESARIAL</strong></h4>
                    <hr />
                  </div>
                  <Col xs={12} md={6} style={{ overflowY: 'auto', maxHeight: 280 }}>
                    {data.empresas.split('-').map(empresa => <p>{empresa}</p>)}
                  </Col>
                  <Col xs={12} md={6}>
                    <center>
                      <Image responsive src={imgEmpresa[data.IDGremio]} style={{ borderColor: 'rgb(208, 208, 213)', borderLeftWidth: 1, borderLeftStyle: 'solid', paddingLeft: 15, height: 280 }} />
                    </center>
                  </Col>
                </div>
              </div>
            }
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
            <Col md={4} style={{ flexDirection: 'row', display: 'flex', padding: 0 }} >
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
                <img src={imgSimce} height={85} alt="dada" />
              </OverlayTrigger>
              <p style={{ color: 'rgb(44, 62, 80)', lineHeight: 1, marginTop: 23, textAlign: 'left' }}>Resultados Simce</p>
            </Col>
            {data.empresas !== '' &&
              <Col onClick={() => this.slider.slickGoTo(1)} md={4} style={{ flexDirection: 'row', display: 'flex', padding: 0, cursor: 'pointer' }} onMouseEnter={() => this.setState({ hoverVinculo: true })} onMouseLeave={() => this.setState({ hoverVinculo: false })} >
                <img src={!hoverVinculo ? imgVinculo : imgVinculoHover} height={85} alt="dada" style={{ cursor: 'pointer' }} />
                <p style={{ color: 'rgb(44, 62, 80)', lineHeight: 1, marginTop: 23, textAlign: 'left' }}>Vinculo Empresarial</p>
              </Col>
            }
            {data.consejo !== '' && data.consejo.includes('http') ?
              <Col md={4} style={{ flexDirection: 'row', display: 'flex', padding: 0 }} onMouseEnter={() => this.setState({ hoverConsejo: true })} onMouseLeave={() => this.setState({ hoverConsejo: false })} >
                <a rel="noopener noreferrer" href={data.consejo} target="_blank" style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', textDecoration: 'none' }}>
                  <img src={!hoverConsejo ? imgConsejo : imgConsejoHover} height={85} alt="dada" style={{ cursor: 'pointer' }} />
                  <p style={{ color: 'rgb(44, 62, 80)', lineHeight: 1, marginTop: 23, textAlign: 'left' }}>Consejo Asesor Empresarial</p>
                </a>
              </Col>
            :
              <Col md={4} onMouseEnter={() => this.setState({ hoverConsejo: true })} onMouseLeave={() => this.setState({ hoverConsejo: false })} >
                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverConsejo}>
                  <div style={{ flexDirection: 'row', display: 'flex', padding: 0 }}>
                    <img src={!hoverConsejo ? imgConsejo : imgConsejoHover} height={85} alt="dada" style={{ cursor: 'pointer' }} />
                    <p style={{ color: 'rgb(44, 62, 80)', lineHeight: 1, marginTop: 23, textAlign: 'left' }}>Consejo Asesor Empresarial</p>
                  </div>
                </OverlayTrigger>
              </Col>
            }
          </Col>
        </Modal.Footer>
      </Modal>
    );
  }
}
