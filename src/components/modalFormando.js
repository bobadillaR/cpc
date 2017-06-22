import React, { Component } from 'react';
import { Modal, Col, Row, Image, Popover, OverlayTrigger } from 'react-bootstrap';
import roles from './media/roles.57e04173.png';
import estudios from './media/estudios.0a1a62e4.png';
import marcos from './media/marcos.e7dc0f36.png';
import perfiles from './media/perfiles.33592995.png';
import resumen from './media/Presentación resumen.fc115617.pdf';
import introduccion from './media/1. Introducción.125a2af2.pdf';
import extraccion from './media/2. Procesos de extracción.915b4abe.pdf';
import procesamiento from './media/3. Procesamiento de cobre oro y plata.a464c493.pdf';
import mantenimiento from './media/4. Procesos de mantenimiento.ce2ec9a0.pdf';
import marco from './media/Marco-de-Cualificaciones-Chile Valora.ab24ed54.pdf';

export default class ModalFormando extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    };
  }

  render() {
    const { show } = this.props;
    const popoverTop = (
      <Popover id="popover-positioned-top" >
        En proceso...
      </Popover>
    );
    return (
      <Modal show={show} onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title><h4>FORMANDO CHILENOS</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
          <p style={{ fontSize: 14, fontFamily: 'Helvetica Neue', textAlign: 'justify', color: 'rgb(71, 71, 97)' }}>
            El rol del sector privado es fundamental en la tarea de alinear los requerimientos
            del mundo productivo con el proceso formativo de los jóvenes para lograr buena formación
            y empleabilidad. En esta sección encontrarás los resultados del estudio realizado por
            la Fundación Chile con el fin de identificar y hacer un balance de las iniciativas del
            sector privado en la formación para el trabajo.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={roles} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>ROL DE LOS SECTORES PRODUCTIVOS</p>
              <OverlayTrigger placement="top" overlay={popoverTop}><p><a style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Informe Final</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p><a role="presentation" onClick={() => window.open(resumen)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Presentación Resumen</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={popoverTop}><p><a style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Infografía resultados informe</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={estudios} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>ESTUDIO DE FUERZA LABORAL</p>
              <p><a target="blank" href="http://www.consejominero.cl/wp-content/uploads/2016/04/Estudio-Fuerza-Laboral-de-la-Gran-Miner%C3%ADa-2015-2024.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Sector Minería</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p><a target="blank" href="http://www.corma.cl/_file/material/estudio-fuerza-laboral-de-la-industria-forestal-chilena-2015-2030_-diagnostico-y-recomendaciones.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Sector Forestal</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={popoverTop}><p><a style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Sector Acuícola</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={popoverTop}><p><a style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Sector Vitivinícola</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <OverlayTrigger placement="top" overlay={popoverTop}><p><a style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Sector Comercio</a></p></OverlayTrigger>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={marcos} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>MARCOS DE CUALIFICACIONES</p>
              <p style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', fontSize: 14 }}>Consejo de Competencias Minero</p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p style={{ display: 'flex', alignItems: 'baseline' }}> 1. <a role="presentation" onClick={() => window.open(introduccion)} style={{ paddingLeft: 3, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}> Introducción</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p style={{ display: 'flex', alignItems: 'baseline' }}> 2. <a role="presentation" onClick={() => window.open(extraccion)} style={{ paddingLeft: 3, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}> Procesos de Extracción</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p style={{ display: 'flex', alignItems: 'baseline' }}> 3. <a role="presentation" onClick={() => window.open(procesamiento)} style={{ paddingLeft: 3, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}> Procesamiento de cobre, oro y plata</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p style={{ display: 'flex', alignItems: 'baseline' }}> 4. <a role="presentation" onClick={() => window.open(mantenimiento)} style={{ paddingLeft: 3, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}> Proceso de Mantenimiento</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p><a role="presentation" onClick={() => window.open(marco)} style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>ChileValora</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={perfiles} alt="242x200" />
              <p style={{ lineHeight: 1, fontSize: 16, fontFamily: 'Lato', color: 'rgb(131, 191, 39)', height: 40, marginTop: 10 }}>PERFILES LABORALES</p>
              <p><a target="blank" href="http://www.chilevalora.cl/buscador/index.php/PerfilCompetencia/index" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Buscador de Perfiles ChileValora</a></p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <p style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', fontSize: 14 }}>Sector Forestal</p>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
              <div style={{ height: 150, overflowY: 'scroll' }}>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={{ marginLeft: 15, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)' }}>1.</p>
                  <div>
                    <p style={{ marginBottom: 0, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', fontSize: 14, fontWeight: 'bold' }}>Subsector Bosques</p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_APLICADOR_DE_HERBICIDAS.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Aplicador de Herbicida</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_JEFE_DE_FAENA_SILVICOLA.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Jefe de Faena Silvícola</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERARIO_SILVICOLA.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Operario Silvícola</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_BRIGADISTA.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Brigadista</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={{ marginLeft: 15, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)' }}>2.</p>
                  <div>
                    <p style={{ marginBottom: 0, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', fontSize: 14, fontWeight: 'bold' }}>Subsector Producción Forestal</p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_CONTROLADOR_DE_LA_PRODUCCION.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Controlador de la Producción</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_MOTOSIERRISTA.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Motosierrista</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERADOR_DE_MAQUINARIA_CAMINOS.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Operador de Maquinaria de Caminos</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_CONDUCTOR_FORESTAL.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Conductor Forestal</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_ESTROBERO.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Estrobero</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERADOR_DE_MAQUINARIA_FORESTAL.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Operador de Maquinaria Forestal</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={{ marginLeft: 15, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)' }}>3.</p>
                  <div>
                    <p style={{ marginBottom: 0, lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', fontSize: 14, fontWeight: 'bold' }}>Subsector Mantención Industrial</p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Calderero.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Maestro Calderero</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Electrico.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Maestro Eléctrico</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Electrocontrol.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Maestro Electrocontrol</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Mecanico.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Maestro Mecánico</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Operador_de_Maquinaria_de_Aserrio.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Operador de Maquinaria Rodante en Industria Maderera</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Supervisor_Electrocontrol.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Supervisor Electrocontrol</a></p>
                    <p style={{ marginBottom: 0 }}><a target="blank" href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Supervisor_Mecanico.pdf" style={{ lineHeight: 1, fontFamily: 'Helvetica Neue', color: 'rgb(71, 71, 97)', cursor: 'pointer', fontSize: 14 }}>Supervisor Mecánico</a></p>
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: 3, marginBottom: 3 }} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ borderTop: '5px solid #83bf27', marginBottom: 60 }} />
      </Modal>
    );
  }
}
