import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import cpcLogo from './media/cpc.7b546cdb.png';
import snaLogo from './media/snaLogo.png';
import cncLogo from './media/cnc.f4df94ed.png';
import sonamiLogo from './media/sonamiLogo.png';
import sofofaLogo from './media/sofofaLogo.png';
import abifLogo from './media/abifLogo.png';
import cchcLogo from './media/cchc.a8f4701e.png';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { width } = this.props;
    return (
      <div style={{ position: width > 773 ? 'fixed' : 'absolute', bottom: width > 773 ? 0 : '', backgroundColor: '#323247', width: '100%', padding: 15 }}>
        <Col sm={3} smOffset={1} xs={12}>
          <a target="_blank" href="http://www.cpc.cl/" rel="noopener noreferrer" >
            {width > 773 ?
              <img src={cpcLogo} style={{ height: 80, width: 'auto' }} alt="cpc-logo" />
              :
              <center>
                <img src={cpcLogo} style={{ height: 50, width: 'auto' }} alt="cpc-logo" />
              </center>
            }
          </a>
        </Col>
        <Col sm={7} style={{ justifyContent: width > 773 ? 'flex-end' : 'center', display: 'flex' }}>
          {width > 773 ?
            <div>
              <a target="_blank" href="http://www.sna.cl/" rel="noopener noreferrer">
                <img src={snaLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
              <a target="_blank" href="http://www.cnc.cl/" rel="noopener noreferrer">
                <img src={cncLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
              <a target="_blank" href="http://www.sonami.cl/" rel="noopener noreferrer">
                <img src={sonamiLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
              <a target="_blank" href="http://www.sofofa.cl/" rel="noopener noreferrer">
                <img src={sofofaLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
              <a target="_blank" href="http://www.cchc.cl/" rel="noopener noreferrer">
                <img src={cchcLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
              <a target="_blank" href="http://www.abif.cl/" rel="noopener noreferrer" >
                <img src={abifLogo} alt="cpc-logo" style={{ marginTop: 15, height: 50, textalign: 'center', marginLeft: 15 }} />
              </a>
            </div>
            :
            <div>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.sna.cl/" rel="noopener noreferrer">
                    <img src={snaLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.cnc.cl/" rel="noopener noreferrer">
                    <img src={cncLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.sonami.cl/" rel="noopener noreferrer">
                    <img src={sonamiLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.sofofa.cl/" rel="noopener noreferrer">
                    <img src={sofofaLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.cchc.cl/" rel="noopener noreferrer">
                    <img src={abifLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
              <Col xs={4}>
                <center>
                  <a target="_blank" href="http://www.abif.cl/" rel="noopener noreferrer">
                    <img src={cchcLogo} alt="cpc-logo" style={{ margintop: 10, height: 30, marginBottom: 10 }} />
                  </a>
                </center>
              </Col>
            </div>
          }
        </Col>
      </div>
    );
  }
}

export default withRouter(Footer);
