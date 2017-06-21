import React, { Component } from 'react';
import { Modal, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

export default class ModalTutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    };
  }

  render() {
    const { show, height } = this.props;
    const opts = {
      height: height * 0.6,
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
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
