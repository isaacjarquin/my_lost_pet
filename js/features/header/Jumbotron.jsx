const React = require('react')
import GoogleMapReact from 'google-map-react';
import IoIosPaw from 'react-icons/lib/io/ios-paw';

const Marker = ({ icon }) => <div>{icon}</div>;

const Jumbotron = React.createClass({
  render () {
    const map = {
      lat: 40.4167754,
      lng: -3.7037901999999576,
      zoom: 5
    }
    const { pets } = this.props
    
    return (
      <div className='jumbotron'>
        <GoogleMapReact
          defaultCenter={{ lat: map.lat, lng: map.lng }}
          defaultZoom={map.zoom}
          zoom={map.zoom}
          center={{ lat: map.lat, lng: map.lng }}
        >
          {pets.map((pet) => {
            return (
              <Marker
                lat={pet.id}
                lng={3.25}
                icon={<IoIosPaw size={25} color={"red"} />}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    )
  }
})

module.exports = Jumbotron
