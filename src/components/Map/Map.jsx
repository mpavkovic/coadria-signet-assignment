import { Icon } from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map as LeafletMap, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

const homeIcon = new Icon({
  iconUrl: 'https://cdn3.iconfinder.com/data/icons/map-markers-1/512/residence-512.png',
  iconSize: [42, 42],
});

const Map = (props) => {
  const { activeFilter, layers, locations } = props;

  return (
    <div>
      <LeafletMap center={[40.6756513, -73.9490446]} zoom={15} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          locations.length > 0
            ? locations.map((l) => {
              const markerProps = {
                key: l.id,
                position: [l.lat, l.lng],
              };
              if (l.isPrimary) {
                markerProps.icon = homeIcon;
              }
              return (
                <Marker {...markerProps}>
                  <Popup className="map-popup-location" minWidth={200}>
                    {l.image ? <img className="map-popup-location-image" src={l.image} /> : null}
                    <div className="map-popup-location-wrapper">
                      <div className="map-popup-location-type">
                        {l.type}
                      </div>
                      <div className="map-popup-location-address">
                        <span className="map-popup-location-address-street">
                          {l.address.street}
                        </span>
                        <br />
                        <span className="map-popup-location-address-city">
                          {`${l.address.city}, ${l.address.zipCode}`}
                        </span>
                      </div>
                      <div className="map-popup-location-beds">
                        <span className="map-popup-location-label">
                          BEDS
                        </span>
                        {l.beds}
                      </div>
                      <div className="map-popup-location-baths">
                        <span className="map-popup-location-label">
                          BATHS
                        </span>
                        {l.baths}
                      </div>
                      <div className="map-popup-location-size">
                        <span className="map-popup-location-label">
                          SQ. FT
                        </span>
                        {new Intl.NumberFormat('en-US').format(l.size)}
                      </div>
                      <div className="map-popup-location-price">
                        <span className="map-popup-location-label">
                          LIST PRICE
                        </span>
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(l.price)}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })
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
};

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
