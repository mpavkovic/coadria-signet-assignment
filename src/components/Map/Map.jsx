import PropTypes from 'prop-types';
import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';

class Map extends React.Component {
  render() {
    const { locations } = this.props;

    return (
      <div>
        <LeafletMap center={[40.6756513, -73.9490446]} zoom={15} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.length > 0 ? locations.map((l, i) => (
            <Marker key={i} position={[l.lat, l.lng]}>
              <Popup>
                {l.type}
              </Popup>
            </Marker>
          )) : null}
        </LeafletMap>
      </div>
    );
  }
}

Map.defaultProps = {
  locations: [],
};

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  })),
};

export default Map;
