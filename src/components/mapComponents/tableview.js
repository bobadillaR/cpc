import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import icon1 from '../media/3especialidades.png';
import icon2 from '../media/2especialidades.png';
import icon3 from '../media/1especialidad.png';
import icon4 from '../media/4especialidades.png';
import icon5 from '../media/5especialidades.png';
import icon6 from '../media/6especialidades.png';

export default class TableView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types: [icon1, icon2, icon3, icon4, icon5, icon6],
      color: ['rgb(219, 219, 219)', 'rgb(243, 243, 243)', 'rgb(169, 169, 183)'],
      hover: -1,
    };
  }


  render() {
    const { types, color, hover } = this.state;
    const { mapData, height, width } = this.props;
    const style1 = { backgroundColor: 'rgb(255, 255, 255)', position: 'fixed', display: 'block', top: 146, zIndex: 5, borderRadius: 5, padding: 0, alignItems: 'center', boxShadow: 'rgb(136, 136, 136) 3px 3px 3px' };
    const style2 = { backgroundColor: 'rgb(255, 255, 255)', borderRadius: 5, padding: 0, zIndex: 5, alignItems: 'center', boxShadow: 'rgb(136, 136, 136) 3px 3px 3px' };
    return (
      <Col xs={12} md={3} mdPull={1} style={width > 993 ? style1 : style2}>
        <h4 style={{ paddingLeft: 15 }}>CENTROS EDUCACIONALES</h4>
        <div style={{ overflowY: 'scroll', overfloxX: 'hidden', maxHeight: height - 146 - 160 - 30 }}>
          {mapData.length > 0 ?
            mapData.map((element, key) =>
              (<div
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: hover === key ? color[2] : color[key % 2], margin: 0, height: 110 }}
                onMouseOver={() => this.setState({ hover: key })}
                onMouseLeave={() => this.setState({ hover: -1 })}
                onClick={() => this.props.onClick(key)}
              >
                <Col xs={2}>
                  <img key={element.id} alt="" src={types[element.tipo - 1]} style={{ height: 30 }} />
                </Col>
                <Col xs={6}>
                  <p style={{ fontWeight: 'bold', marginTop: 5 }}>{element.nombre}</p>
                </Col>
                <Col xs={4}>
                  <img alt="logo" src={element.ImagenLogo} style={{ height: 60 }} />
                </Col>
              </div>),
            )
            :
            <div>
              <hr />
              <p>Tu búsqueda no ha entregado resultados.</p>
            </div>
          }
        </div>
      </Col>
    );
  }
}
