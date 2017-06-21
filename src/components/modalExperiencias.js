import React, { Component } from 'react';
import { Modal, Row, Image } from 'react-bootstrap';
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
import fotoIzquierda from './media/Nestle1.979ceeca.jpg';
import fotoDerecha from './media/Nestle2.8d4e8382.jpg';
import flechaDerhover from './media/flechaderhover.png';
import flechaIzqhover from './media/flechaizqhover.png';

export default class ModalCapacitar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
      key: 3,
      video: ['B9a39wTo2yI', 'Go_CD4RgAOw', 'W8QYWb8uQhE', 'aQgChKon0vE', 'JO4lTzRSCec', 'bS2rGGe1reo'],
      hoverIzquierda: false,
      hoverDerecha: false,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    const { key } = this.state;
    this.slider.slickNext();
    this.setState({ key: key === 6 ? 0 : key + 1 });
  }
  previous() {
    const { key } = this.state;
    this.slider.slickPrev();
    this.setState({ key: key === 0 ? 6 : key - 1 });
  }

  render() {
    const { show, height } = this.props;
    const { video, key, hoverIzquierda, hoverDerecha } = this.state;
    const opts = {
      height: height * 0.6,
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const settings = {
      arrows: true,
      centerMode: true,
      dots: true,
      infinite: true,
      fade: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      slideWidth: 108.2,
      slideCount: 7,
      swipeToSlide: true,
    };
    return (
      <Modal show={show} onHide={this.props.modalClick} bsSize="lg" >
        <Modal.Header closeButton style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Modal.Title><h4>EXPERIENCIAS SECTORIALES</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={hoverIzquierda ? flechaIzqhover : flechaIzquierda} onMouseEnter={() => this.setState({ hoverIzquierda: true })} onMouseLeave={() => this.setState({ hoverIzquierda: false })} onClick={this.previous} />
            <center style={{ height: height * 0.6, width: '100%' }}>
              {key === 6 ?
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={fotoIzquierda} style={{ height: 350, width: '50%' }} />
                  <Image src={fotoDerecha} style={{ height: 350, width: '50%' }} />
                </div>
              :
                <YouTube
                  videoId={video[key]}
                  opts={opts}
                />
              }
            </center>
            <Image src={hoverDerecha ? flechaDerhover : flechaDerecha} onMouseEnter={() => this.setState({ hoverDerecha: true })} onMouseLeave={() => this.setState({ hoverDerecha: false })} onClick={this.next} />
          </div>
          <Row />
          <hr style={{ borderTop: '5px solid #474761' }} />
          <div style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min1} onClick={() => this.setState({ key: 0 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min2} onClick={() => this.setState({ key: 1 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min3} onClick={() => this.setState({ key: 2 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min4} onClick={() => this.setState({ key: 3 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min5} onClick={() => this.setState({ key: 4 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min7} onClick={() => this.setState({ key: 5 })} /></center></div>
              <div><center><Image style={{ height: 'auto', padding: 3, width: '100%', cursor: 'pointer' }} src={min6} onClick={() => this.setState({ key: 6 })} /></center></div>
            </Slider>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
