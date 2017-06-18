import React, { Component } from 'react';
import { Modal, Col, Row, Image } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import min1 from './media/Miniatura.8523f7db.png';
import min2 from './media/Miniatura2.e706a71e.png';
import min3 from './media/miniatura3.8f04b5b2.png';
import min4 from './media/miniatura4.07ff134c.png';
import min5 from './media/miniatura5.992fda58.png';
import min6 from './media/miniatura6.7dfc95e7.png';
import min7 from './media/Miniatura7.63e3cfc6.png';
import flechaIzquierda from './media/flechaizq.png';
import flechaDerecha from './media/felchaderecha.png';

export default class ModalTutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    };
  }

  render() {
    const { show, height, width } = this.props;
    const opts = {
      height: height * 0.6,
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const settings = {
      dots: true,
      infinite: true,
      fade: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      slideWidth: 108.2,
      slideCount: 7,
      centerMode: true,
    };
    return (
      <Modal show={show} onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title><h4>Aprende a usar esta Plataforma Interactiva</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <center style={{ height: height * 0.6, width: '100%' }}>
              <YouTube
                videoId="nXsb-NvDk_I"
                opts={opts}
              />
            </center>
          </div>
          <Row />
        </Modal.Body>
      </Modal>
    );
  }
}
