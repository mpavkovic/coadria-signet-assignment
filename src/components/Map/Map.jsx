import PropTypes from 'prop-types';
import React from 'react';
import { Map as LeafletMap, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

/* eslint-disable react/prefer-stateless-function */
class Map extends React.Component {
  render() {
    const { activeFilter, layers, locations } = this.props;

    return (
      <div>
        <LeafletMap center={[40.6756513, -73.9490446]} zoom={15} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            locations.length > 0
              ? locations.map(l => (
                <Marker key={l.id} position={[l.lat, l.lng]}>
                  <Popup>
                    {l.type}
                  </Popup>
                </Marker>
              ))
              : null
          }
          {
            layers.length > 0
              ? layers.filter(layer => layer.type === activeFilter).map(layer => <Polygon color={layer.color} positions={layer.points} />)
              : null
          }
        </LeafletMap>
      </div>
    );
  }
}

Map.defaultProps = {
  layers: [],
  locations: [],
};

Map.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  layers: PropTypes.arrayOf(PropTypes.shape({})),
  locations: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  })),
};

const mapStateToProps = state => ({
  activeFilter: state.filters.active,
  layers: state.layers,
  locations: state.locations,
});

export default connect(mapStateToProps)(Map);
