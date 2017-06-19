import React from 'react';

export default class SearchBox extends React.Component {
  componentDidMount() {
    const input = document.getElementById('input');
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }

  render() {
    return <input id="input" {...this.props} type="text" style={{ color: 'rgb(160, 224, 15)', backgroundColor: 'transparent', borderWidth: '0px 0px 1px', width: '100%', borderColor: 'transparent transparent rgb(250, 250, 251)', paddingTop: 8 }} />;
  }
}
