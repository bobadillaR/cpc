import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Col } from 'react-bootstrap';
import LogoNav from './media/logoNav.png';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { width } = this.props;
    return (
      <Navbar collapseOnSelect fluid fixedTop>
        <Col md={10} mdOffset={1} >
          <Navbar.Header>
            <a href="/">
              <img src={LogoNav} alt="logo" style={{ height: 48, marginTop: 6, paddingRight: 10 }} />
            </a>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/plataforma">
                <NavItem>Liceos de Educación Técnica Profesional (ETP)</NavItem>
              </LinkContainer>
              <NavDropdown title="Iniciativas del Sector Privado" id="basic-nav-dropdown">
                <MenuItem onClick={this.props.modalClick1}>Formando Chilenos</MenuItem>
                <MenuItem onClick={this.props.modalClick2}>Fortaleciendo la Formación Técnica</MenuItem>
                <MenuItem onClick={this.props.modalClick3}>Capacitar con calidad</MenuItem>
                <MenuItem onClick={this.props.modalClick4}>Experiencias Sectoriales</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              {width > 766 && <span style={{ borderLeftColor: '#EEEEEE', borderLeftStyle: 'solid', borderLeftWidth: 1, height: '70%', position: 'absolute', top: '15%' }} />}
              <NavItem onClick={this.props.modalClick5}>Tutorial</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
