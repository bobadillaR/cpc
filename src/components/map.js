import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Navbar from './mapComponents/navbar';
import TableView from './mapComponents/tableview';
import mapStyle from './mapComponents/mapStyle.json';
import mapDataExcel from './mapComponents/mapData.json';
import icon1 from './media/3especialidades.png';
import icon2 from './media/2especialidades.png';
import icon3 from './media/1especialidad.png';
import icon4 from './media/4especialidades.png';
import icon5 from './media/5especialidades.png';
import icon6 from './media/6especialidades.png';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: -33.4367233,
      lng: -70.6524783,
      zoom: 8,
      types: [icon1, icon2, icon3, icon4, icon5, icon6],
      tasa: '',
      sector: '',
      mapData: mapDataExcel,
    };
  }

  filter() {
    const { tasa, sector } = this.state;
    let mapData = mapDataExcel;
    if (tasa !== null && tasa.value !== '') {
      mapData = mapData.filter((data) => {
        if (tasa.value === 0) return data.tasaTitulacion <= 0.6;
        else if (tasa.value === 1) return data.tasaTitulacion > 0.6 && data.tasaTitulacion < 0.8;
        else if (tasa.value === 2) return data.tasaTitulacion >= 0.8;
        else return true;
      });
    } if (sector.length > 0) {
      mapData = mapData.filter((data) => {
        let val = false;
        data.sectorEconomico.split(',').forEach(sectorData => sector.forEach((sectorFilter) => { if (sectorFilter.label === sectorData) val = true; }));
        return val;
      });
    }
    return mapData;
  }

  render() {
    const { lat, lng, zoom, types, sector, tasa } = this.state;
    const mapData = this.filter();
    return (
      <div>
        <GoogleMapReact
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          style={{ display: 'flex' }}
          options={{ styles: mapStyle }}
        >
          {mapData.map(data =>
            <img key={data.id} alt="" src={types[data.tipo - 1]} style={{ height: 30, width: 30, position: 'absolute' }} lat={data.latLong.split(',')[0]} lng={data.latLong.split(',')[1]} />,
        )}
        </GoogleMapReact>
        <Navbar changeSector={sectorValue => this.setState({ sector: sectorValue })} changeTasa={tasaValue => this.setState({ tasa: tasaValue })} sector={sector} tasa={tasa} />
        <TableView />
      </div>
    );
  }
}
