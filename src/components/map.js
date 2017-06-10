import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Navbar from './mapComponents/navbar';
import mapStyle from './mapComponents/mapStyle.json';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: -33.4367233,
      lng: -70.6524783,
      zoom: 15,
    };
  }


  render() {
    const { lat, lng, zoom } = this.state;
    return (
      <div>
        <GoogleMapReact
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          style={{ display: 'flex' }}
          options={{ styles: mapStyle }}
        />
        <Navbar />
      </div>
    );
  }
}
