const React = require('react')
import GoogleMapReact from 'google-map-react';

const Jumbotron = React.createClass({
  render () {
    const map = {
      lat: 40.4167754,
      lng: -3.7037901999999576,
      zoom: 5
    }
    return (
      <div className='jumbotron'>
        <GoogleMapReact
          defaultCenter={{ lat: map.lat, lng: map.lng }}
          defaultZoom={map.zoom}
          zoom={map.zoom}
          center={{ lat: map.lat, lng: map.lng }}
        >
        </GoogleMapReact>
        <div className='container text-center brand-name'>
          <h1>My Lost Pet</h1>
        </div>
      </div>
    )
  }
})

module.exports = Jumbotron
